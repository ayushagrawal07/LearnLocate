import React from 'react'
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import Login from './components/user/Login';
import BottomNav from './components/BottomNav';
const App = () => {
  return (
    <>
      <Loading />
      <Notification /> 
    <Login/>
   <Navbar/>
   <BottomNav/>
    </>
  )
}

export default App