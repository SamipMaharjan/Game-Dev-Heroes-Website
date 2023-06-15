import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Header() {
  const [sideBar, setSideBar] = useState(false);

  //Creating a Styled Button Comopnnet
  //Underlines the buttons when hovered over
  const StyledButton = styled(Button)({
    color: "white",
    display: "inline-block",
    paddingBottom: "0.25rem",
    position: "relative",

    //Underlines the text when hovered
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      width: 0,
      height: "2px",
      backgroundColor: "rgb(0, 255, 0)",
      transition: "width 0.25s ease-out",
    },
    "&:hover::after": {
      width: "100%",
    },
    //Changing the color of text when hovered
    "&:hover": {
      color: "rgb(0, 255, 0)",
      // fontSize: "s1rem",
      transition: "color 0.2s, font-size 0.2s",
    },
  });

  return (
    <>
      {/* NavBar  */}
      <AppBar sx={{ backgroundColor: "#2B2A2A" }}>
        <Toolbar>
          {/* LOGO  */}
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Game Dev Heroes
          </Typography>

          {/* Buttons for Navigation  */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <StyledButton component={Link} to='/' variant="text">Home</StyledButton>
            <StyledButton variant="text">About</StyledButton>
            <StyledButton variant="text">Our team</StyledButton>
            <StyledButton variant="text">Events Organized</StyledButton>
            <StyledButton variant="text">Contact Us</StyledButton>
          </Box>


          {/*Menu Icon and Side bar when screen width shrinks  */}
          <MenuIcon sx={{ display: { xs:'block', sm: 'none' }}} onClick={() => {setSideBar(!sideBar)}}/>
          <Drawer variant="temporary" open={sideBar} anchor="right" onClose={() => {setSideBar(false)}} >
            
            {/* <Typography variant="h6">Side Bar</Typography> */}
            <Button variant="text">Home</Button>
            <Button variant="text">About</Button>
            <Button variant="text">Our team</Button>
            <Button variant="text">Events Organized</Button>
            <Button variant="text">Contact Us</Button>

          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
}
