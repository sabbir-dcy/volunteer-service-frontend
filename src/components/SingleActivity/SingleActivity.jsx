import { useLocation } from 'react-router-dom'

const SingleActivity = ({ activity, handleDelete }) => {
  const { fullName, email, activity: activityName, _id } = activity
  const location = useLocation()

  return (
    <tr className='border-b-2 odd:bg-gray-200'>
      <td className='py-2 px-4'>{fullName}</td>
      <td className='py-2 px-4'>{email}</td>
      <td className='py-2 px-4'>{activityName}</td>
      <td className='py-2 px-4'>
        {location.pathname === '/my_activities' ? (
          <button
            className='bg-red-500 p-1 text-white rounded-md'
            onClick={() => handleDelete(_id)}
          >
            delete
          </button>
        ) : (
          <button className='bg-green-500 py-1 px-2 text-white rounded-md'>
            view
          </button>
        )}
      </td>
    </tr>
  )
}

export default SingleActivity
