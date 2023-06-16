import { AppBar, Box, Toolbar, Typography, makeStyles, withStyles } from "@mui/material";
import React, { useState } from "react";
import '../styles/HeaderStyles.css'
import { NavLink } from "react-router-dom";
const Headers = () => {
    const[login,setLogin]=useState(true)
    const loginHandler=()=>{
        setLogin(!login)
    }
  
  return (
    <Box >
        <AppBar component={"nav"} sx={{bgcolor:'black'}}>
            <Toolbar className="navtool">
                <Typography variant="h6"
                component="div" 
               
                >
                
                    <NavLink style={{color:"white"}} to="/">Heading</NavLink>
                </Typography>
                <Box >
                    <ul className="navigation">
{login?<><li style={{fontSize:"20px"}} onClick={loginHandler}>Logout</li><li><NavLink style={{fontSize:"20px",color:"white"}} to="/Cart">Cart</NavLink></li></>:<li onClick={loginHandler}>Login</li>}

                    </ul>

                </Box>
            </Toolbar>

        </AppBar>
      
    </Box>
    
  );
};

export default Headers;
