import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import SingleActivity from '../../components/SingleActivity/SingleActivity'
import { auth } from '../../firebase/firebase.init'

const MyActivities = () => {
  const [myActivities, setmyActivities] = useState()
  const [user] = useAuthState(auth)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/my_activities?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => setmyActivities(res.data))
  }, [user])

  const handleDelete = (_id) => {
    axios
      .delete(`http://localhost:5000/api/my_activities?id=${_id}`)
      .then((res) => {
        toast.success('activity deleted', {
          position: 'bottom-center',
          autoClose: 3000,
          toastId: '1',
        })
        const remain = myActivities.filter((activity) => activity._id !== _id)
        setmyActivities(remain)
        console.log(res)
      })
  }
  return (
    <div className='w-4/5 mx-auto mt-12 text-center sm:w-fit'>
      <table className='border'>
        <thead>
          <tr className='border-b-2 bg-blue-500 text-white'>
            <th className='py-2 px-4 font-normal'>volunteer name</th>
            <th className='py-2 px-4 font-normal'>email address</th>
            <th className='py-2 px-4 font-normal'>joined activity</th>
            <th className='py-2 px-4 font-normal'>action</th>
          </tr>
        </thead>
        <tbody>
          {myActivities?.map((activity) => (
            <SingleActivity
              key={activity._id}
              activity={activity}
              handleDelete={handleDelete}
            ></SingleActivity>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyActivities
