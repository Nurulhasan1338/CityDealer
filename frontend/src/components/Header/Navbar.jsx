import React, { useState } from 'react'
import logo from "./assets/ICON.png";
import "./header.css";
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';
import MenuListComposition from './Menu';
import { Hidden } from '@mui/material';



const Navbar = () => {

    const [isMenuCollapsed, setMenuCollapsed] = useState(true);

    const handleToggleClick = () => {
        setMenuCollapsed(!isMenuCollapsed);
    };

    const handleToggleBlur = () => {
        setMenuCollapsed(true);
    };
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img id="citydealerlogo" src={logo} alt="City Dealer Logo" /> <label htmlFor="logo" className='logoname' >CityDealer</label>
                </a>
                <div className='mx-3'>

                <Hidden mdUp implementation="css">
                <MenuListComposition></MenuListComposition>
                </Hidden>
                </div>
               
                <div className={`collapse navbar-collapse ${isMenuCollapsed ? '': 'show'}`} id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Construction">Construction</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Properties">Properties</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/AboutUs">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sell">Sell</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <Button
                            className='me-3'
                            color="success"
                        >
                            Countact Us!
                        </Button>
                    </span>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
