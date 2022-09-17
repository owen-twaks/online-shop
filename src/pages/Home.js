import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from '../assets/PecanPie.jpeg';
import '../styles/Home.css';


function Home() {
  return (
    <div className='home'  style={{ backgroundImage:`url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1> Sinatra's King Pie</h1>
        <p> PIE TO FIT ANY TASTE</p>
        <Link to='/menu'>
        <button> ORDER NOW </button>
        </Link>
       
      </div>
    </div>
  );
}

export default Home
 