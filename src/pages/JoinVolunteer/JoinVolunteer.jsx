import axios from 'axios'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { auth } from '../../firebase/firebase.init'

const JoinVolunteer = () => {
  const { register, handleSubmit } = useForm()
  const [user] = useAuthState(auth)
  const onSubmit = (data) => {
    const activity = {
      ...data,
      email: user?.email,
    }
    axios
      .post(
        'https://sheltered-mountain-03833.herokuapp.com/api/activity',
        activity
      )
      .then((res) => {
        toast.success('joined successfully', {
          position: 'bottom-center',
          autoClose: 3000,
          toastId: '1',
        })
        console.log(res)
      })
  }

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
    border-2
    mt-16'
    >
      <div className='space-y-5 w-4/5 mx-auto py-8'>
        <h2 className='text-xl font-semibold'>join to an activity</h2>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
          <label htmlFor='name' className='font-medium'>
            full name
          </label>
          <input
            id='name'
            placeholder='enter your full name'
            {...register('fullName', { required: true })}
            className='border-b-2 outline-none mb-5'
          />
          <label htmlFor='email' className='font-medium'>
            email address
          </label>
          <input
            id='email'
            defaultValue={user?.email}
            readOnly
            disabled
            placeholder='enter your email address'
            className='border-b-2 outline-none mb-5'
          />
          <label htmlFor='activity' className='font-medium'>
            activity name
          </label>
          <input
            id='activity'
            placeholder='enter your choice of activity'
            {...register('activity', { required: true })}
            className='border-b-2 outline-none mb-5'
          />

          <label htmlFor='description'>description</label>
          <textarea
            name='description'
            id='description'
            defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo optio necessitatibus possimus nostrum exercitationem magnam et quam deserunt debitis aliquid?'
            cols='30'
            rows='5'
            {...register('description')}
            className='border-2 mb-5 p-2'
          ></textarea>

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

export default JoinVolunteer
