import { Outlet } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const Register = () => {
  return (
    <div className='my-10 space-y-20'>
      <div
        className='
        flex
        items-center
        justify-center
        '
      >
        <img src={logo} alt='logo' />
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
      <Outlet></Outlet>
    </div>
  )
}

export default Register
