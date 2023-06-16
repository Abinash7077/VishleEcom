import { Box,Paper, Container, Typography } from "@mui/material";
import React from "react";
import TableComp from "./TableComp";
import { useSelector } from "react-redux";


import Divider from "@mui/material/Divider";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ bgcolor: "gray", borderRadius: "10px", width: "100%" }}>
        <Typography
          sx={{
            fontSize: "45px",
            color: "white",
            fontWeight: "bold",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          Shopping Cart
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              gap: "25px",
              height: "fitContent",
              display: "flex",
              flexWrap: "wrap",
              marginTop:"50px",
              justifyContent: "space-between",
            }}
          >
             <Box  sx={{width:"60%",minWidth:"370px",marginBottom:"40px",bgcolor:"white",height:"fitContent",borderRadius:"10px"}}  >
    <Paper elevation={3} />
            {/* Cart section start */}
           {
            productCartItem.map((el)=>(
                <TableComp
                key={el._id}
                id={el._id}
                name={el.name}
                image={el.image}
                category={el.category}
                qty={el.qty}
                total={el.total}
                price={el.price}
                />
            ))
           }
            </Box>
            {/* payment section */}
            <Box
              sx={{
                width: "35%",
                minWidth: "370px",
                borderRadius: "10px",
                height: "300px",
                padding: "15px",
                bgcolor: "white",
              }}
            >
              <h2
                style={{
                  fontSize: "30px",
                  paddingBottom: "15px",
                  fontWeight: "bold",
                  color: "black",
                  textAlign: "left",
                }}
              >
                Total
              </h2>
              <Divider light />
              <Box>
                <ul
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    gap: "25px",
                    marginTop: "15px",
                    color: "black",
                  }}
                >
                  <li
                    style={{
                      fontSize: "15px",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                      Sub-total
                    </span>
                    <span style={{ fontWeight: "bold" }}>{totalPrice}</span>
                  </li>
                  <li
                    style={{
                      fontSize: "15px",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                      Delivery
                    </span>
                    <span style={{ fontWeight: "bold" }}>$43</span>
                  </li>
                </ul>
                <button
                  style={{
                    width: "100%",
                    backgroundColor: "green",
                    color: "white",
                    fontSize: "17px",
                    fontWeight: "bold",
                    padding: "10px 15px",
                    marginTop: "25px",
                  }}
                >
                  CHECKOUT
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
