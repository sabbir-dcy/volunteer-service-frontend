import axios from 'axios'
import { useEffect, useState } from 'react'

export function useVoluneteers() {
  const [volunteers, setVolunteers] = useState([])
  useEffect(() => {
    axios.get('data.json').then((res) => setVolunteers(res.data))
  }, [])
  return { volunteers }
}
