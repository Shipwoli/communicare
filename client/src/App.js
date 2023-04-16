import './App.css';
import NavBar from './components/Navbar/Navbar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
