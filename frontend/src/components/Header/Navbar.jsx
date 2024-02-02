import React, { useState } from 'react'
import logo from "./assets/ICON.png";
import "./header.css";
import Button from '@mui/joy/Button';



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
                <button className="navbar-toggler" type="button" onClick={handleToggleClick} onBlur={handleToggleBlur} data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isMenuCollapsed ? '': 'show'}`} id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Interior</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Construction</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Properties</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sell</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <Button
                            className='me-3'
                            color="success"
                            disabled={false}
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
