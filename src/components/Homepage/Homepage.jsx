import React from 'react'
import BackgroundImage from "../../assets/background.png"
import Logo from "../../assets/logo2.png"
function Homepage() {
  return (
    <div>
        <div className='grid grid-cols-12 justify-between md:px-[50px] my-5'>
            <div className='col-span-4 h-full w-[150px]'>
                <img src={Logo} alt="logo"/>
            </div>
            <div className='col-span-1 font-bold cursor-cursor-pointer'>Home</div>
            <div className='col-span-1 font-bold cursor-pointer'>Contact</div>
            <div className='col-span-1 font-bold cursor-pointer'>About US</div>
            <div className='col-span-1 font-bold cursor-pointer'>Feedback</div>
            <div className='col-span-4 flex justify-end'>
                <a href='/login'>
                    <div className='h-[20px] w-[75px] rounded-sm bg-yellow-400 p-5 flex justify-center items-center shadow-2xl col-span-4'>
                        <button className=' cursor-pointer'>LOGIN</button>
                    </div>
                </a>
            </div>
        </div>
      <div className='relative'>
        <div className='absolute h-full w-full'>
            <div className='text-white pt-[20%] px-[5%] text-6xl'>
                <h1>MODERN</h1>
                <h1 className='text-yellow-400'>LEARNING 4.0</h1>
            </div>
            <div className='px-[5%] text-white text-md w-[59%] mt-3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    libero aspernatur commodi dicta, provident temporibus. 
                    Minus consectetur ab maxime porro.
                </p>
            </div>
            <div className='px-[5%] mt-3 gap-[7rem] flex'>
                <button className='bg-white py-[8px] px-[30px] cursor-pointer'>Try now</button>
                <button className='bg-yellow-400 py-[8px] px-[30px] cursor-pointer'>Remind me</button>
            </div>
        </div>
        <img className='w-full h-full' src={BackgroundImage} alt="background"/>
      </div>
    </div>
  )
}

export default Homepage