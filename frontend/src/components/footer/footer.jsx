import React from 'react';
import ProfileCard from "../profileCard"
import IconButton from '@mui/joy/IconButton';
import SvgIcon from '@mui/joy/SvgIcon';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row p-3">
          {/* First Column */}
          <div className="col-md-3 col-sm-4">
            <h5>Navigation 1</h5>
            <ul className="list-unstyled">
              <li><a href="#">Interior</a></li>
              <li><a href="#">  Construction</a></li>
              <li><a href="#">  Properties</a></li>
            </ul>
          </div>

          {/* Second Column */}


          <div className="col-md-3 col-sm-4">
            <h5>Navigation 2</h5>
            <ul className="list-unstyled">
              <li><a href="#">  About us</a></li>
              <li><a href="#">Sell</a></li>

            </ul>
          </div>


          {/* Fourth Column - Wider */}
          <div className="col-md-3 ">
            <h5>Contact Information</h5>
            <p>
              Address: 123 Main St, Cityville<br />
              Phone: (555) 123-4567<br />
              Email: info@example.com
            </p>
          </div>

          <div className="col-md-3 ">
            <ProfileCard></ProfileCard>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
