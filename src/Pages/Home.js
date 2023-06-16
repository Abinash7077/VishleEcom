import React from 'react';
import Product from '../Component/Product';
import Footer from '../Component/Footer';
import Banner from '../Component/Banner';


const Home = () => {
  return (
    <div className='home_section'>
      
      <Banner/>
  <Product/>
  <Footer/>
 
    </div>
  );
}

export default Home;
