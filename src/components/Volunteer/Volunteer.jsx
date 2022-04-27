import React from 'react'

const Volunteer = ({ volunteer }) => {
  const { name, img } = volunteer
  return (
    <div
      className='
    w-4/5 
    mx-auto
    relative'
    >
      <div className=''>
        <img src={img} alt='volunteer' className='' />
      </div>
      <button
        className='
      bg-blue-500
      text-white
      w-full
      absolute
      bottom-0
      p-5
      rounded-b-xl'
      >
        <h2>{name}</h2>
      </button>
    </div>
  )
}

export default Volunteer
