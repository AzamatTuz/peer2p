import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProfileImage from './ProfileImage';
import VerificationUser from './VerificationUser';
import ChangeProfileImage from './ChangeProfileImage';
import UserInfo from './UserInfo';
import { Link } from 'react-router-dom';

function ProfileMain() {
    const token = localStorage.getItem("token");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [profileImage, setProfileImage] = useState()
    const [user, setUser] = useState({})
    const [isClick, setIsClick] = useState(false)
    const [rentBtn, setRentBtn] = useState(true)
    const [userId, setUserId] = useState()
    const [myProducts, setMyProducts] = useState([])
    const [deleteId, setDeleteId] = useState()
    const [isDelete, setIsDelete] = useState(false)

    const handleImageChange = (e) => {
    const file = e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };
    
    function getDeleteId(id) {
      setDeleteId(id)
      setIsDelete(true)
    }
    
    async function deleteProduct() {
      try {
        const result = await axios.delete('http://localhost:3000/product/delete/' + deleteId)
        console.log(result.data);
        setIsDelete(false)
        getProducts()
        
      } catch (error) {
        console.error(error);
        
      }
    }

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
            setMyProducts(result.data)
            
        } catch (error) {
            console.error(error);
            
        }
    }

    if (myProducts.length < 1) {
      if (userId > 0) getProducts() 
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
            <button onClick={() => setRentBtn(true)} className={`${rentBtn && 'bg-[#ADC178] text-white'} pl-3 pr-3 text-2xl rounded-t-2xl cursor-pointer`}>Беретін</button>
            <button onClick={() => setRentBtn(false)} className={`${rentBtn || 'bg-[#ADC178] text-white'} pl-3 pr-3 text-2xl rounded-t-2xl cursor-pointer`}>Алған</button>
            <h3 className='text-2xl'>заттар</h3>
          </article>

          <hr className='w-full h-2 border-none bg-[#ADC178]'/>  

        </section>

        {isClick && <VerificationUser setIsClick={setIsClick} isClick={isClick} id={user.id}/>}

        {rentBtn ? <section className='flex items-center justify-center mt-20 mb-20'>
            <div className='grid grid-cols-3 justify-center gap-30'>
              {myProducts.map((product) => 
            
              <article className='relative flex flex-col items-center gap-5 w-70 p-3 shadow-2xl rounded-2xl' key={product.id}>
                  <img className='w-70 h-70 object-cover rounded-2xl' src={`http://localhost:3000/uploads/${product.product_image}`} alt="" />
                  <h3 className='text-xl font-medium'>{product.name}</h3>
                  <button className='bg-[#ADC178] authBtn w-full p-2 text-white font-semibold rounded-lg cursor-pointer'><span className='relative z-3'>Қарау</span></button>
                  <button onClick={() => getDeleteId(product.id)} className='bg-[#ADC178] p-2 text-white font-semibold rounded-full cursor-pointer absolute w-13 h-13 flex items-center justify-center top-[-20px] left-[-20px]'><img className='w-4' src="src/assets/delete.png" alt="" /></button>
              </article>  

            )}

              <article className='h-[413px] flex flex-col items-center justify-center gap-5 w-70 p-3 shadow-2xl rounded-2xl'>
                  
                  <Link to={'/addproduct'} className='cursor-pointer text-8xl text-[#ADC178] w-30 h-30 border-4 border-[#ADC178] flex justify-center rounded-full'>+</Link>
                  
                  
              </article>  
            </div>
        </section> : ''}

        {isDelete && <article className='close-window'>
            
            <div className='bg-white flex flex-col items-center gap-5 p-5 rounded-lg w-80'>
                <h1 className='font-semibold text-center text-xl'>Сіз сенімдісізбе ?</h1>
                <div className='flex w-full gap-5'>
                    <button onClick={deleteProduct} className='bg-[#ADC178] w-[50%] text-white p-2 rounded text-lg cursor-pointer'>Иә</button>
                    <button onClick={() => setIsDelete(false)} className='bg-[#ADC178] w-[50%] text-white p-2 rounded text-lg cursor-pointer'>Жоқ</button>
                </div>
            </div>
            
        </article>}
        
    </main>
  )
}

export default ProfileMain