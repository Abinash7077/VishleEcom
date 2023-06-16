import React from 'react';
import '../styles/HeaderStyles.css'

const Banner = () => {
  return (
    <div className='Banner_section'>
       <img src="images/banner.jpeg" className='banner_img' alt="" />
       <div className="opacity"></div>
       <div className="banner-text">
        <h2>Vishlesan</h2>
        <p style={{fontSize:"17px",marginTop:"14px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus culpa, error sunt repudiandae sint eveniet ducimus veritatis beatae asperiores?</p>
        <button>LearMore</button>
       </div>
    </div>
  );
}

export default Banner;
