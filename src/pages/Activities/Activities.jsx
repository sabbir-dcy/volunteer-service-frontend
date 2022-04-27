import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleActivity from '../../components/SingleActivity/SingleActivity'

const Activities = () => {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/activities')
      .then((res) => setActivities(res.data))
  }, [])
  return (
    <div className='w-4/5 mx-auto mt-12 text-center sm:w-fit'>
      <table>
        <thead>
          <tr className='border-b-2 bg-blue-500 text-white'>
            <th className='py-2 px-4 font-normal'>volunteer name</th>
            <th className='py-2 px-4 font-normal'>email address</th>
            <th className='py-2 px-4 font-normal'>joined activity</th>
            <th className='py-2 px-4 font-normal'>action</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <SingleActivity
              key={activity._id}
              activity={activity}
            ></SingleActivity>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Activities
