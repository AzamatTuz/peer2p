import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GerBestProducts() {
  const [bestProducts, setBestProducts] = useState([]);

//   async function getProduct() {
//     try {
//       const result = await axios.get("http://localhost:3000/products");
      
//         setBestProducts(result.data);
      
//     } catch (error) {
//         console.error(error);
        
//     }
//   }

  

//   useEffect(() => {
//     getProduct();
//   }, []);

  return (
    <>

    <article className="flex flex-col items-center justify-between p-5 w-80 h-100 shadow-2xl rounded-2xl">
        <img className="w-full h-50" src="" alt="" />
        <h1>Lorem ipsum</h1>
        <Link className="w-full text-center bg-[#ADC178] text-white p-2 rounded-[4px]">Қарау</Link>
    </article>
    <article className="flex flex-col items-center justify-between p-5 w-80 h-100 shadow-2xl rounded-2xl">
        <img className="w-full h-50" src="" alt="" />
        <h1>Lorem ipsum</h1>
        <Link className="w-full text-center bg-[#ADC178] text-white p-2 rounded-[4px]">Қарау</Link>
    </article>
    <article className="flex flex-col items-center justify-between p-5 w-80 h-100 shadow-2xl rounded-2xl">
        <img className="w-full h-50" src="" alt="" />
        <h1>Lorem ipsum</h1>
        <Link className="w-full text-center bg-[#ADC178] text-white p-2 rounded-[4px]">Қарау</Link>
    </article>
    <article className="flex flex-col items-center justify-between p-5 w-80 h-100 shadow-2xl rounded-2xl">
        <img className="w-full h-50" src="" alt="" />
        <h1>Lorem ipsum</h1>
        <Link className="w-full text-center bg-[#ADC178] text-white p-2 rounded-[4px]">Қарау</Link>
    </article>
    <article className="flex flex-col items-center justify-between p-5 w-80 h-100 shadow-2xl rounded-2xl">
        <img className="w-full h-50" src="" alt="" />
        <h1>Lorem ipsum</h1>
        <Link className="w-full text-center bg-[#ADC178] text-white p-2 rounded-[4px]">Қарау</Link>
    </article>
    <article className="flex flex-col items-center justify-between p-5 w-80 h-100 shadow-2xl rounded-2xl">
        <img className="w-full h-50" src="" alt="" />
        <h1>Lorem ipsum</h1>
        <Link className="w-full text-center bg-[#ADC178] text-white p-2 rounded-[4px]">Қарау</Link>
    </article>
    <article className="flex flex-col items-center justify-between p-5 w-80 h-100 shadow-2xl rounded-2xl">
        <img className="w-full h-50" src="" alt="" />
        <h1>Lorem ipsum</h1>
        <Link className="w-full text-center bg-[#ADC178] text-white p-2 rounded-[4px]">Қарау</Link>
    </article>
    <article className="flex flex-col items-center justify-between p-5 w-80 h-100 shadow-2xl rounded-2xl">
        <img className="w-full h-50" src="" alt="" />
        <h1>Lorem ipsum</h1>
        <Link className="w-full text-center bg-[#ADC178] text-white p-2 rounded-[4px]">Қарау</Link>
    </article>
    <article className="flex flex-col items-center justify-between p-5 w-80 h-100 shadow-2xl rounded-2xl">
        <img className="w-full h-50" src="" alt="" />
        <h1>Lorem ipsum</h1>
        <Link className="w-full text-center bg-[#ADC178] text-white p-2 rounded-[4px]">Қарау</Link>
    </article>
    
    </>
    
  )
}

export default GerBestProducts;
