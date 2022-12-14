import "./Header.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="topnav">
        <NavLink className='link' to="/">Home</NavLink>
        <NavLink className='link' to="/OTP">OTP</NavLink>
        <NavLink className='link' to="/img">Zoom Image</NavLink>
      </div>
    </>
  );
}

export default Nav;
