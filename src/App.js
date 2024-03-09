import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from './components/Footer';
import Videos from './components/Videos';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';
import Testing from './components/Testing';

function App() {
  return <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/videos' element={<Videos/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/testing' element={<Testing/>}/>
    </Routes>
    <Footer/>
  </Router>
}

export default App;