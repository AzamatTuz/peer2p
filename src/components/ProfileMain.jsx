import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProfileImage from './ProfileImage';
import VerificationUser from './VerificationUser';
import ChangeProfileImage from './ChangeProfileImage';
import UserInfo from './UserInfo';

function ProfileMain() {
    const token = localStorage.getItem("token");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [profileImage, setProfileImage] = useState()
    const [user, setUser] = useState({})
    const [isClick, setIsClick] = useState(false)
    const [rentBtn, setRentBtn] = useState(true)
    const [userId, setUserId] = useState()

    const handleImageChange = (e) => {
    const file = e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };
    

    const handleSubmit = async (e) => {

        const formData = new FormData();
        formData.append("id", user.id);
        if (image) formData.append("image", image);

    e.preventDefault();

    try {
      const res = await axios.put("http://localhost:3000/changeImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      setProfileImage(res.data);
      
      setImage(null);
      setPreview(null);
    } catch (err) {
      console.error("Қате: " + (err.response?.data?.message || "Сервер қатесі"));
    }
  };
  


    async function getUser() {
        try {
            const result = await axios.get('http://localhost:3000/profile', {
                headers: {
                    "authorization": `Bearer ${token}`,
                },
            })
            setUser(result.data[0]);
            setUserId(result.data[0].id)
            
        } catch (error) {
            console.error(error);
            
        }
    }

    async function getProducts() {
        try {

            const result = await axios.get(`http://localhost:3000/products/user/${userId}`)
            console.log(result.data);
            
        } catch (error) {
            console.error(error);
            
        }
    }

    if (user) {
      getProducts()
    }

    useEffect(()=>{
        getUser()
        
    },[])

    
  return (
    
    <main className='shadowed mt-80 border-t-10 border-t-[#ADC178] flex flex-col justify-between'>
        <section className='flex justify-between'>
          <ChangeProfileImage setPreview={setPreview} profileImage={profileImage} user={user} handleImageChange={handleImageChange} preview={preview} handleSubmit={handleSubmit}/>

          <UserInfo user={user} setIsClick={setIsClick} isClick={isClick}/>
        </section>

        <section>
          <article className='flex gap-3 ml-5'>
            <h3 className='text-2xl font-medium'>Жалға</h3>
            <button onClick={() => setRentBtn(true)} className={`${rentBtn && 'bg-[#ADC178] text-white'} pl-3 pr-3 text-2xl rounded-t-2xl cursor-pointer`}>Берген</button>
            <button onClick={() => setRentBtn(false)} className={`${rentBtn || 'bg-[#ADC178] text-white'} pl-3 pr-3 text-2xl rounded-t-2xl cursor-pointer`}>Алған</button>
            <h3 className='text-2xl'>заттар</h3>
          </article>

          <hr className='w-full h-2 border-none bg-[#ADC178]'/>  

        </section>

        {isClick && <VerificationUser setIsClick={setIsClick} isClick={isClick} id={user.id}/>}

        {rentBtn ? <section>

        </section> : ''}
        
    </main>
  )
}

export default ProfileMain