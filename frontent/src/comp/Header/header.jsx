import React from 'react'
import "./header.css"
import logo from "../../assets/logo.png"
import { CiLocationOn } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import menu from "../../assets/menu.svg"
import { CiImageOn } from "react-icons/ci";
import m2 from "../../assets/m2.svg"
import m3 from "../../assets/m3.svg"
import { FaWhatsapp } from "react-icons/fa";
import m4 from "../../assets/m4.svg"
import m5 from "../../assets/m5.svg"
import { CiInstagram } from "react-icons/ci";
import { PiBuildingsDuotone } from "react-icons/pi";

const Header = (props) => {

    // const {favList,get} = props;



  return (
    <div className='header p-3'>
        <div className="row text-center border-bottom border-dark px-3">
            <div className="col-1">
                <img src={logo} className='w-100' alt="logo" />
            </div>
            <div className="col-9 d-flex align-items-center">
                <h1 >CityDealer</h1>
            </div>
            <div className="col-2 d-md-none d-lg-none menu">
                <button type="button"><img src={menu} alt="menu" /></button>
            </div>
        </div>

        <div className="row my-4 d-none d-md-flex justify-content-between topMenu ">
            <div className="col-6 d-flex justify-content-around">
                <button ><CiImageOn /><p>Gallery</p></button>
                <button type='button' ><CiBookmarkPlus /> <p> Saved</p></button>
                <button ><FaWhatsapp /><p>whatsapp</p></button> 
            </div>
            <div className="col-4 d-flex justify-content-around pe-2">
                <button ><CiInstagram/> <p>Instagram</p></button>
                <button type='button' ><CiCircleQuestion /> <p>about us</p></button>
            </div>  

        </div>
      
    </div>
  )
}

export default Header
