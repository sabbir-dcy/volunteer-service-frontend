import React from 'react'

const SingleActivity = ({ activity }) => {
  const { fullName, email, activity: activityName } = activity
  return (
    <tr className='border-b-2 odd:bg-gray-200'>
      <td className='py-2 px-4'>{fullName}</td>
      <td className='py-2 px-4'>{email}</td>
      <td className='py-2 px-4'>{activityName}</td>
      <td className='py-2 px-4'>
        <button>delete</button>
      </td>
    </tr>
  )
}

export default SingleActivity
