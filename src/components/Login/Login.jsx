import React from 'react'
import { useForm } from "react-hook-form"

function Login() {
    const {register,handleSubmit} = useForm()

    const onSubmit = (data) => console.log(data)

  return (
    <div className='bg-gray-200 h-screen flex justify-center items-center'>
      <div className='bg-white h-[500px] w-2/4 shadow-black shadow-2xl rounded-3xl rounded-tr-3xl'>
        <div className='bg-black h-20 flex justify-center items-center rounded-tl-3xl rounded-tr-3xl'>
            <span className='text-white md:text-xl lg:text-3xl sm:text-md text-sm'>Student Management System</span>
        </div>
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='h-[320px] rounded-b-3xl items-center flex justify-center'>
                <div>
                    <div className='flex justify-center'>
                        <input placeholder='Email:' {...register("email", { required: true })} className='bg-gray-200 rounded-lg p-3 m-3 w-auto sm:w-[250px] md:w-[350px] lg:w-[500px] xl:w-[620px]'/>
                    </div>
                    <div className='flex justify-center'>
                        <input type='password' placeholder='Password:' {...register("password", { required: true })} className='bg-gray-200 rounded-lg p-3 m-3 w-auto sm:w-[250px] md:w-[350px] lg:w-[500px] xl:w-[620px]'/>
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' className='w-[100px] bg-yellow-400 rounded-lg py-2'>LOGIN</button>
                    </div>
                    <div className='flex justify-center'>
                        <a href='/signup' className='text-blue-500 underline pt-3 cursor-pointer'>Don't have an account?</a>
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
