import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/firebase.init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

const SocialLogin = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth)
  const navigate = useNavigate()

  const location = useLocation()
  const path = location.state?.from?.pathname
  useEffect(() => {
    if (user) {
      const from = path || '/'
      navigate(from, { replace: true })
    }
  }, [user, navigate, path])

  return (
    <div
      className='
    h-96
    w-4/5
    sm:w-3/5
    md:w-1/2
    lg:w-2/6
    xl:w-1/4
    mx-auto
    border-2
    grid
    items-center
    '
    >
      <div className='space-y-5 text-center'>
        <h2 className='text-3xl font-semibold'>Login with</h2>
        <button
          onClick={() => {
            signInWithGoogle()
          }}
          className='
        py-2
        w-4/5
        rounded-full
        border-2
        block
        mx-auto
        '
        >
          Continue with Google
        </button>
        <p>
          dont have account?
          <Link to='/register/signup' className='underline text-blue-600'>
            {' '}
            create an account
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SocialLogin
