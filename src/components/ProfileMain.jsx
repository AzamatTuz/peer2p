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
  
  console.log(user.phone_number);
  

    async function getUser() {
        try {
            const result = await axios.get('http://localhost:3000/profile', {
                headers: {
                    "authorization": `Bearer ${token}`,
                },
            })
            setUser(result.data[0]);
            
        } catch (error) {
            console.error(error);
            
        }
    }

    useEffect(()=>{
        getUser()
    },[])
  return (
    
    <main className='shadowed mt-80 border-t-10 border-t-[#ADC178] flex justify-between'>
        <ChangeProfileImage setPreview={setPreview} profileImage={profileImage} user={user} handleImageChange={handleImageChange} preview={preview} handleSubmit={handleSubmit}/>

        <UserInfo user={user} setIsClick={setIsClick} isClick={isClick}/>

        {isClick && <VerificationUser setIsClick={setIsClick} isClick={isClick} id={user.id}/>}
        
    </main>
  )
}

export default ProfileMain