import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Donation from './components/Donation';
export default function App() {
  return (
    <div className="App">
       <BrowserRouter>
{/* added routes */}
      <Routes>
        <Route path="/" element={< About />} />
        <Route path="/donation" element={< Donation />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}