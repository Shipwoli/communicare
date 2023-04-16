import { Link } from "react-router-dom";
import './navbar.css';
import { BrowserRouter } from 'react-router-dom';

function NavBar() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="logo1">
           <h1>CommuniCare.</h1>
        </div>
        <ul className="list1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="#footer">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li><Link to="/donation">Donations</Link></li>
        </ul>
        <Link className="nav-link" to="/logout">Logout</Link>
      </div>
    </BrowserRouter>
  );
}

export default NavBar;
