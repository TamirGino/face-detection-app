import React, { Component }  from 'react';
import { Box } from "@mui/material";

const Card = (props) => {

    const boxStyle = {
        backgroundColor: 'black',
        backgroundImage: `
          radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
          radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
          radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
          radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px)
        `,
        backgroundSize: '550px 550px, 350px 350px, 250px 250px, 150px 150px',
        backgroundPosition: '0 0, 40px 60px, 130px 270px, 70px 100px',
      };

    return (

        <Box
      sx={{
        ...boxStyle, ...props.additionalStyle,
      }} >
            {props.children}
      </Box>

    );
   };

   export default Card;