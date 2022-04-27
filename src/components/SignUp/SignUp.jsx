import React from 'react'
import { useForm } from 'react-hook-form'

const SignUp = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div
      className='
    min-h-96
    w-4/5
    sm:w-3/5
    md:w-1/2
    lg:w-2/6
    xl:w-1/4
    mx-auto
    border-2'
    >
      <div className='space-y-5 w-4/5 mx-auto py-8'>
        <h2 className='text-xl font-semibold'>sign up with email</h2>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
          <label htmlFor='name'>full name</label>
          <input
            id='name'
            placeholder='enter your full name'
            {...register('fullName', { required: true })}
            className='border-b-2 outline-none mb-5'
          />
          <label htmlFor='email'>email address</label>
          <input
            id='email'
            placeholder='enter your email address'
            {...register('email', { required: true })}
            className='border-b-2 outline-none mb-5'
          />
          <label htmlFor='password'>password</label>
          <input
            id='password'
            type='password'
            placeholder='enter decent password'
            {...register('volunteerType', { required: true })}
            className='border-b-2 outline-none mb-5'
          />
          <label htmlFor='confirm-password'>confirm password</label>
          <input
            id='confirm-password'
            type='password'
            placeholder='confirm password'
            {...register('volunteerType', { required: true })}
            className='border-b-2 outline-none mb-5'
          />

          <input
            type='submit'
            className='
            py-2
          bg-blue-500
          text-white
          cursor-pointer
          
        '
          />
        </form>
      </div>
    </div>
  )
}

export default SignUp
