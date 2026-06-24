import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './Components/Home'
import About from './Components/About'
import NotFound from './Components/NotFound'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Users from './Pages/Users'
import ProtectedRoute from './Pages/ProtectedRoute'
import AddUser from './Pages/AddUser'
import EditUser from './Pages/EditUser'

const App = () => {
  return (
    <div className='overflow-hidden'>

      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/users' element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          } />

          <Route path='/Add' element={
            <ProtectedRoute>
              <AddUser />
            </ProtectedRoute>
          } />

          <Route path='/edit/:id' element={
            <ProtectedRoute>
              <EditUser />
            </ProtectedRoute>
          } />

          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App