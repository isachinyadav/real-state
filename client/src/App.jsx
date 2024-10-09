import React from 'react'
import { BrowserRouter  , Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Signin from './pages/signin';
import SignOut from './pages/signout';
 import About from './pages/about';
 import Profile from './pages/profile';
 import Header  from './components/header';
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signout' element={<SignOut/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App
