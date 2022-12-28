import { Card, Typography } from "@mui/material";
import React, { useState } from "react";
import p1 from "../../Assests/Image/1.jpg";
import p2 from "../../Assests/Image/2.png";
import p3 from "../../Assests/Image/3.png";
import { DocType } from "./DocInterfaces";

function Certificate(doc: DocType) {
  const [isHover, setIsHover] = useState(true);

  const handleMouseOver = () => {
    setIsHover(false);
  };

  const handleMouseOut = () => {
    setIsHover(true);
  };

  var t;
  if (doc.file === 1) {
    t = p1;
  } else if (doc.file === 2) {
    t = p2;
  } else {
    t = p3;
  }

  return (
    <>
      {/* {isHover ? (
        <img
          src={t}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{ height: "180px", width: "260px" }}
        />
      ) : (
        <>
        <img src={t} onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut} 
        style={{ height: "180px", width: "260px" }} />
        <Card
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          sx={{
            height: "180px",
            width: "260px",
            background: "black",
            opacity: 0.6,
            top: 68,
            left: 20,
            right: 0,
            bottom: 0,
            position: "absolute",
            zIndex: 5,
            color: "white",
            textAlign: "center",
            justifySelf: "center",
          }}
        >
          <Typography sx={{position : "absolute", top : "45%", left : "50%"}}>
            HI
          </Typography>
        </Card>
        </>
      )} */}

      {/* {isHover ? 
          <Card>

          </Card>
        :
        
        } */}

        {/* <Card sx={{background : "#ddd", minHeight : "180px", zIndex : 1}}>
          <img src={t} onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut} 
            style={{ height: "180px", width: "260px" }} />
          <Card sx={{minHeight: "100px", position: "relative", top}}>
            
          </Card>
          
        </Card> */}

    </>
  );
}

export default Certificate;
