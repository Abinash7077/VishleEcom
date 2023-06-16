import React from 'react';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { useDispatch } from 'react-redux';
import { increaseQty,decreaseQty,deleteCartItem } from '../Redux/productSlide';

const TableComp = ({ id, name, image, category, qty, total, price }) => {
    const dispatch=useDispatch()
    console.log("table",id,name)
  return (
  <>

    <Box sx={{display:"flex",margin:"10px",alignItems:"center",justifyContent:"space-between"}}>
        <img src={image} style={{width:"30%",maxWidth:"150px"}} alt="" />
        <Box  sx={{width:"70%"}}>
            <h2 style={{color:"black"}}>₹{price}</h2>
            <p style={{color:"black",marginTop:"15px"}}>{name}</p>
            <Box >
                <ul style={{display:"flex",marginTop:"25px",alignItems:"center",justifyContent:"center",gap:"25px"}}>
                    <li><select name="size" id="size" style={{padding:"5px 5px",fontSize:"15px",borderRadius:"10px"}}>
                        <option value="small">S</option>
                        <option value="small">M</option>
                        <option value="small">L</option>
                        <option value="small">XL</option>
                        <option value="small">XXl</option>
                        </select></li>
                        <li style={{color:"black",display:"flex",gap:"15px",alignItems:"center",justifyContent:"space-between"}}><span style={{fontSize:"35px"}} onClick={()=>dispatch(decreaseQty(id))} >-</span><p style={{fontWeight:"bold"}}>{qty}</p><span style={{fontSize:"25px",fontWeight:"bold"}} onClick={()=>dispatch(increaseQty(id))} >+</span></li>
                </ul>
            </Box>
        </Box>
    </Box>
    <Divider light />
    </>
   
  );
}

export default TableComp;
