import axios from 'axios'
import { useEffect, useState } from 'react'

export function useToken(user) {
  const [token, setToken] = useState('')
  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email
      if (email) {
        const { data } = await axios.post('http://localhost:5000/login', {
          email,
        })
        setToken(data.token)
        localStorage.setItem('token', data.token)
      }
    }
    getToken()
  }, [user])
  return [token]
}
