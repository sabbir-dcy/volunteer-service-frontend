import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { auth } from '../../firebase/firebase.init'

const Navbar = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)

  return (
    <div className='shadow-lg'>
      <div
        className='
      flex
      justify-between
      items-center
      w-4/5
      mx-auto
      h-20'
      >
        <div
          className='
        flex
        items-center
        '
        >
          <img
            src={logo}
            alt='logo'
            onClick={() => navigate('/')}
            className='
          cursor-pointer'
          />
          <div>
            <h2
              className='
            text-xl
            font-medium'
            >
              volunteer
            </h2>
            <p
              className='
            text-blue-500'
            >
              s e r v i c e
            </p>
          </div>
        </div>
        <div className='space-x-5'>
          <Link to={'/'}>home</Link>
          <Link to={'/join'}>join</Link>
          <Link to={'/'}>events</Link>
          <Link to={'/activities'}>activities</Link>
          {user ? (
            <button
              className='bg-blue-500 text-white py-2 px-3 rounded-md'
              onClick={() => {
                signOut(auth)
              }}
            >
              logout
            </button>
          ) : (
            <button
              className='bg-blue-500 text-white py-2 px-3 rounded-md'
              onClick={() => navigate('/register/social')}
            >
              register
            </button>
          )}

          <button
            className='bg-blue-500 text-white py-2 px-3 rounded-md'
            onClick={() => navigate('/')}
          >
            admin
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
