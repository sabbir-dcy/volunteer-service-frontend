import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import { auth } from '../../firebase/firebase.init'

export function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth)
  const location = useLocation()
  if (loading) {
    return
  }
  if (!user) {
    return <Navigate to='/register/social' state={{ from: location }} replace />
  }

  return children
}
