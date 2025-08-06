import React, { useEffect, useState } from "react";
import HeaderBtns from "./HeaderBtns";
import { Link } from "react-router-dom";
import axios from "axios";

function HeaderNav() {
  const token = localStorage.getItem("token");
  const [isLoged, setIsLoged] = useState(false)
  const [profileImage, setProfileImage] = useState()

  async function getUser() {
    try {

      const result = await axios.get("https://peer2p-back.onrender.com/profile", {
        headers: {
          "authorization": `Bearer ${token}`,
        },
      });

      if (result.data.length > 0) {
        setIsLoged(true)
        setProfileImage(result.data[0].profile_image);
    
        
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <nav className="flex justify-between w-full pl-22 pr-15">
      <HeaderBtns to="/" text="Home" icon="src/assets/Home.png" />
      <HeaderBtns to="/about" text="About" icon="src/assets/About.png" />
      <HeaderBtns to="/catalog" text="Catalog" icon="src/assets/Catalog.png" />
      <HeaderBtns to="/favourites" text="Favourites" icon="src/assets/heart_head.png"/>
      <HeaderBtns to="/notifications" text="Notification" icon="src/assets/Chats.png" />
      {isLoged ? <Link to={"/profile"}><img className="w-15 bg-white rounded-full border-2 border-[#ADC178]" src={`https://peer2p-back.onrender.com/uploads/${profileImage}`} alt=""/></Link> : <HeaderBtns to="/authorization" text="Login/Register" icon="src/assets/Login.png" />}
    </nav>

  );
}

export default HeaderNav;
