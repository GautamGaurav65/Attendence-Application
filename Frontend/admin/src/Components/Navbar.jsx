import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/attendance">Attendance</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/login">Logout</Link></li>
    </ul>
  </nav>
);

export default Navbar;