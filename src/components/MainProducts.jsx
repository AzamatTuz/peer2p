import axios from 'axios';
import React, { useEffect, useState } from 'react'

function MainProducts({ categoryFilter }) {
    const [products, setProducts] = useState([])
    const [prompt, setPrompt] = useState('')

    async function getProducts() {
        try {
            const result = await axios.get('http://localhost:3000/products')
            setProducts(result.data)
            console.log(result.data);
            
            
        } catch (error) {
            console.error(error);
            
        }
    }

    const filteredProducts = products.filter((item) => {
        if (categoryFilter == 'Барлығы') {
            return item
        } else if (item.category == categoryFilter) {
            return item
        }
    })

    const searchedProducts = filteredProducts.filter((item) => {
        if (item.name.toLowerCase().includes(prompt.toLowerCase().trim())) {
            return item
        }
    })

    useEffect(() => {
        getProducts()
    },[])
  return (
    <section className='mt-20 w-full flex flex-col items-center'>
        
        <article className='w-[80%] relative m-20'>
            <label className='absolute w-5 top-4 left-4' htmlFor="search"><img src="src/assets/search.png" alt="" /></label>
            <input value={prompt} onChange={(e) => setPrompt(e.target.value)} className='w-full text-white bg-[#534239] p-3 pl-13 outline-none border-3 border-[#ADC178] rounded-full placeholder:text-white' placeholder='Іздеу' id='search' type="text" />
        </article>

        <article className='grid grid-cols-3 gap-30'>
            {searchedProducts.map((item) => 
                
                <div key={item.id} className='bg-white relative flex flex-col items-center gap-5 w-70 p-3 shadow-2xl rounded-2xl'>
                    <img className='w-70 h-70 object-cover rounded-2xl' src={`http://localhost:3000/uploads/${item.product_image}`} alt="" />
                    <h3 className='text-xl font-medium'>{item.name}</h3>
                    <button className='bg-[#ADC178] authBtn w-full p-2 text-white font-semibold rounded-lg cursor-pointer'><span className='relative z-3'>Қарау</span></button>
                </div>

            )}
        </article>

    </section>
  )
}

export default MainProducts