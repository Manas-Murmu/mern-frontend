import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaArchive,
  FaProductHunt,
  FaCartArrowDown,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MERN Task Searching Yard</Link>
      </div>

      <ul>
        <li></li>
        <li>
          <Link to="/addproduct">
            <FaProductHunt />
            Add Product
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
