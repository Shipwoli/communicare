import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/aunthentication/Login';
import Signup from './components/aunthentication/Signup';
import Blog from './components/Blog';
import Donation from './components/Donation';
import About from './components/About/About';
import Contact from './components/Contacts/contact';
 
export default function App() {
  return (
    <div className="App">
       <BrowserRouter>
{/* added routes */}
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={< About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/donation" element={<Donation/>}/>
        <Route path="/contacts" element={<Contact/>}/>
        


      </Routes>
      </BrowserRouter>
    </div>
  );
}