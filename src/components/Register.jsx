import React from 'react'

function Register() {
    const inputStyle = 'bg-[#A98467] border-none outline-none text-white pl-10 p-4 rounded-full placeholder:text-white'
    const btnStyle = 'bg-white p-4 w-[47%] rounded-full font-semibold flex items-center gap-8'
  return (
    <form className='flex flex-col w-[45%] gap-[35px] p-10 pl-20 pr-20 bg-glass'>
        <h1 className='text-white text-5xl font-bold text-center'>Тіркелу</h1>
        <p className='text-white text-4xl text-center'>Жалғастыру үшін тіркеліңіз</p>
        <input type="text" className={inputStyle} placeholder='Есіміңіз . . .'/>
        <input type="text" className={inputStyle} placeholder='Почтаңыз . . .'/>
        <input type="password" className={inputStyle} placeholder='Құпия сөз . . .'/>
        <input type="password" className={inputStyle} placeholder='Құпия сөзді тексеру . . .'/>
        <div className='flex justify-between '>
            <button className={btnStyle}><img className='w-8' src="src/assets/devicon_google.png" alt="" />Google арқылы</button>
            <button className={btnStyle}><img className='w-8' src="src/assets/Vectorв.png" alt="" />Vk арқылы</button>
        </div>
        <button className={`${inputStyle} font-bold text-2xl text-center`}>Тіркелу</button>
        <p className='text-white text-center'>Аккаунтыңыз барма ? <a className='decoration-solid' href="">Кіру</a></p>
    </form>
  )
}

export default Register