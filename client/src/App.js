
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/aunthentication/Login';
import Signup from './components/aunthentication/Signup';
import Blog from './components/Blog';
import Donation from './components/Donation';
import About from './components/About/About';
import Contact from './components/Contacts/contact';
import Map from './components/Map';
import LandingPage from './components/Landing/LandingPage';
import DiseasesList from './components/Diseases/Diseases';
import Areas from './components/Areas/Area';
import AreaDetails from './components/Areas/areas';
import Donate from './components/Diseases/Donate';


 
export default function App() {
  return (
    <div className="App">
       <BrowserRouter>
{/* added routes */}
      <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Donate />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/map" element={<Map />} />
            <Route path="/diseases" element={<DiseasesList />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/areadetails" element={<AreaDetails />} />
            <Route path="/signup" element={<Signup />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}