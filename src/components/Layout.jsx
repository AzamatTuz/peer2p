import React from 'react'
import { Link } from 'react-router-dom'

function Layout() {
  return (
    <section className='absolute top-50 left-40 flex flex-col gap-5'>
        <h1 className='text-5xl font-extrabold text-[#534239] w-150 leading-15'>Сенімді жалға алу – оңай әрі қауіпсіз!</h1>
        <p className='text-2xl font-medium w-120 text-[#534239]'>Жақын маңнан керек дүниеңізді тауып, уақытша пайдаланыңыз – үнемді, ыңғайлы және сенімді.</p>
        <article className='flex gap-10 mt-10 '>
            <Link to={'/catalog'} className='bg-[#534239] text-white p-2 w-60 text-center rounded-[15px] transition duration-300 ease-in-out hover:bg-[#3C302A]'>Тауарларды қарау</Link>
            <Link to={'/addproduct'} className='bg-[#534239] text-white p-2.5 w-60 text-center rounded-[15px] transition duration-300 ease-in-out hover:bg-[#3C302A]'>Жалға беру</Link>
        </article>
    </section>
  )
}

export default Layout