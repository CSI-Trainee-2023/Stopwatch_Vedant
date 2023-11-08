import { useState } from 'react'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import './App.css'
import ForgetPassword from './Pages/ForgetPassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginPage />
      <RegisterPage />
      <ForgetPassword />
    </>
  )
}

export default App
