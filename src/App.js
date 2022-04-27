import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { RequireAuth } from './components/RequireAuth/RequireAuth'
import SignUp from './components/SignUp/SignUp'
import SocialLogin from './components/SocialLogin/SocialLogin'
import Home from './pages/Home/Home'
import JoinVolunteer from './pages/JoinVolunteer/JoinVolunteer'
import Register from './pages/Register/Register'
import Activities from './pages/Activities/Activities'
import MyActivities from './pages/MyActivities/MyActivities'
import { Zoom, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className='App'>
      <ToastContainer transition={Zoom}></ToastContainer>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}>
          <Route path='social' element={<SocialLogin />}></Route>
          <Route path='signup' element={<SignUp />}></Route>
        </Route>
        <Route
          path='/join'
          element={
            <RequireAuth>
              <JoinVolunteer />
            </RequireAuth>
          }
        ></Route>
        <Route
          path='/activities'
          element={
            <RequireAuth>
              <Activities />
            </RequireAuth>
          }
        ></Route>
        <Route
          path='/my_activities'
          element={
            <RequireAuth>
              <MyActivities />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
