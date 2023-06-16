import React from 'react';
import { Card,CardActionArea,CardMedia,CardContent,CardActions, Button,Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../Redux/productSlide';

const ProductCard = ({id,category,desc,price,image,title}) => {
    const dispatch = useDispatch()
    const handleAddCartProduct = (e) => {
        dispatch(addCartItem({
          _id : id,
          name : title,
          price : price,
          category : category,
          image : image,
        }))
      };
      console.log("id",id,desc,title,"img",image)
  return (
    <>
    <Card className='ProductCard'  key={id} sx={{marginBottom:"30px", maxWidth: 345,minWidth:"300px",flexGrow:"1" }}>
      <CardActionArea className='ProductCard'>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
          sx={{objectFit:"contain"}}
        />
        <CardContent sx={{bgcolor:"white",width:"100%"}}>
          <Typography gutterBottom variant="h5" sx={{fontSize:"17px",fontWeight:"bold",textAlign:"justify"}} component="div">
            {title}
          </Typography>
          <Typography sx={{display:"flex",gap:"50px",width:"100%",alignItems:"center",justifyContent:"space-around"}} variant="body2" color="text.secondary" >
            <span style={{fontSize:"15px",marginRight:"15px",fontWeight:"bold"}}>Price:- <span style={{color:"blue"}}>${price}</span></span><span style={{color:"red"}}>UpTo 50% off</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="contained" color="success" onClick={handleAddCartProduct}>
        Add To Cart
      </Button>
       
      </CardActions>
     
    </Card>
      
    </>
  );
}

export default ProductCard;
