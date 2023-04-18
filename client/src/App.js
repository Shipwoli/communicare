import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/contact'

export default function App() {
  return (
    <div className="App">
       <BrowserRouter>
{/* added routes */}
      <Routes>
        <Route path="/" element={< Contact />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}