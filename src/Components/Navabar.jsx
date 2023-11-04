import React from "react";
import '../CSS/Navbar.css';
import { Link } from 'react-router-dom'

export default function Navabar() {
    return (
        <div>
            <header className="header">
                <Link to="/first" className="logo">
                    WeRead
                </Link>
                <nav className="navbar">
                    <Link to="/home">
                        Create
                    </Link>
                    <a href="/about">About</a>

                    <Link to="/blog">Blogs</Link>
                    <Link to="/weather">Weather</Link>

                    <a href="/register">Register</a>
                </nav>
                <div className="social-media">
                    <a href="https://twitter.com">
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="https://facebook.com">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="https://instagram.com">
                        <i className="bx bxl-instagram-alt"></i>
                    </a>
                </div>
                <div className="search">
                    <input type="text" />
                    <button type="submit">Search</button>
                </div>
            </header>
        </div>
    );
}
