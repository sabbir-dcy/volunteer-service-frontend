import React from 'react'
import { useVoluneteers } from '../../hooks/useVoluneteers'
import Volunteer from '../Volunteer/Volunteer'

const Volunteers = () => {
  const { volunteers } = useVoluneteers()
  return (
    <div
      className='
    grid 
    grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    w-4/5
    mx-auto
    gap-4'
    >
      {volunteers.map((volunteer) => (
        <Volunteer key={volunteer._id} volunteer={volunteer}></Volunteer>
      ))}
    </div>
  )
}

export default Volunteers
