import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <Box
      component={"div"}
      sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white",width:"100%", p: 3,my:5, }}
    >
     { <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>}
      <Typography
        variant="h5"
        component={"div"}
        sx={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
          bgcolor: "black",
          padding: "25px",
          "@media (max-width:600px)": {
            fontSize: "18px",
          },
        }}
      >
        All Rights Reservede &copy; Vishleshan
      </Typography>
    </Box>
  );
};

export default Footer;
