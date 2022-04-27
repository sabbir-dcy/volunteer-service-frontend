import axios from 'axios'
import { useEffect, useState } from 'react'

export function useToken(user) {
  const [token, setToken] = useState('')
  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email
      if (email) {
        const { data } = await axios.post(
          'https://sheltered-mountain-03833.herokuapp.com/login',
          {
            email,
          }
        )
        setToken(data.token)
        localStorage.setItem('token', data.token)
      }
    }
    getToken()
  }, [user])
  return [token]
}
