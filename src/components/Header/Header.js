import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <a href="#" className="shop-name">BENGAL FRUIT MART</a>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/home">HOME</Link>
                    </li>
                    <li>
                        <Link to="/addFruits">ADMIN</Link>
                    </li>
                    <li>
                        <Link to="/admin">ORDER</Link>
                    </li>
                    <li>
                        <Link to="/deals">DEALS</Link>
                    </li>
                    <li className="active">
                        <Link to="/login" >LOGIN</Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Header;