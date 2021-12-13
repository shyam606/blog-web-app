import React from "react";
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
const Navbar = ()=>{
    return(<>
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/allblogs">All Blogs</Link>
        <Link to="/login">Login</Link>
    </div>
    </>)

}
export default Navbar;