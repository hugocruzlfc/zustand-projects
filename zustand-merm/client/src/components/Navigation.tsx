import React from "react";
import { Link } from "react-router-dom";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="me">Profile</Link>
        </li>
        <li>
          <Link to="register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
