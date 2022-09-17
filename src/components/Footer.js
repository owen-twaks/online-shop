import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <InstagramIcon/>
        <Facebook/>
        <Twitter/>
        <LinkedIn/>
        
        </div>
        <p>&copy; 2021 sinatrapie.com</p>
      
    </div>
  )
}

export default Footer
