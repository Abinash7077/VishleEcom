import { Box,Paper, Container,CardActionArea,CardActions,CardMedia,Button,CardContent,Card, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../styles/HeaderStyles.css'
import ProductCard from './ProductCard';

const Product = () => {
  const[data,setData]=useState([])
 useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=> 
  setData(json))
 },[])
 
            
  return (
   <Box component={"div"} className='ProductSection' sx={{width:"100%",height:'fitcontent'}}>
    <Typography className='product_heading' sx={{fontSize:"35px",margin:"30px 25px"}}>
      Product Section
    </Typography>

    <Container className='Product_container'sx={{display:"flex",justifyContent:"space-between",alignItems:"center",}}>
{
  data.map((item)=>(

    <ProductCard
    key={item.id}
    id={item.id}
    category={item.category}
    desc={item.description}
    price={item.price}
    title={item.title}
    image={item.image}

    
    />
  ))
}


    </Container>

   </Box>
  );
}

export default Product;
