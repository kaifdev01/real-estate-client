import PropertyList from './components/PropertyListing'
import Signup from './pages/Register'
import Login from './pages/Login'
import { Route, Router, Routes } from 'react-router-dom'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'

function App() {


  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-pass" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
      {/* <h1>Property Listing</h1>
      <PropertyList /> */}
    </>
  )
}

export default App
