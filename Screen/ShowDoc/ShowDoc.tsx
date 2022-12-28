import { Box, Grid, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useState } from "react";
import Certificate from "./Certificate";
import p1 from '../../assets/image/1.jpg';
import p2 from '../../assets/image/2.jpg';
import p3 from '../../assets/image/3.jpg';
import p4 from '../../assets/image/4.png';
import p5 from '../../assets/image/5.jpg';
import p6 from '../../assets/image/6.jpg';

import { DocType } from "./DocInterfaces";
import classes from "./DocumentStyle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";


const initDocs = [
  {
    name: "Deep Morker",
    file: [p1],
  },

  {
    name: "Arya Morker",
    file: [p2, p3, p4],
  },
  
  {
    name: "Dev Patel",
    file: [p5, p6, p1, p3],
  },
];

function ShowDoc() {
  
  const [isHover, setIsHover] = useState<any>([]);
  // var isHover : any = []

  initDocs.map((per, i) => {isHover.push(new Array(per.file.length).fill(true)) })

  const handleMouseOver = (i : number, j : number) => {
    isHover[i][j] = false;

    console.log(isHover)
  };

  const handleMouseOut = (i : number, j : number) => {
    isHover[i][j] = true;
    console.log(isHover)
  };
  // const [documents, setDocuments] = useState(initDocs);
  return (
    <Box>
      {initDocs.map((doc, i) => {
        return (
          <Card key={i}>
            <Typography sx={{ margin: "20px" }}>
              <h3>Name : {doc.name}</h3>
            </Typography>
            <Grid
              container
              direction={"row"}
              sx={{ margin: "20px" }}
              spacing={5}
            >
              {doc.file.map((img, j) => {
                return (
                  <Card
                    sx={classes.cardOuter}
                    onMouseEnter={() => {handleMouseOver(i, j)}}
                    onMouseLeave={() => {handleMouseOut(i, j)}}
                  >
                    <Card
                      sx={isHover[i][j] ? classes.cardOverlay : classes.cardOverlayHover}
                    ></Card>
                    <img style={{ height: "180px" }} src={img} alt={"img"} />
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={isHover[i][j] ? classes.stack : classes.stackHover}
                    >
                      <VisibilityIcon onClick={() => {console.log(doc.file);}}/>
                      <DeleteIcon onClick={() => {console.log(doc.file);}}/>
                      <DownloadIcon onClick={() => {console.log(doc.file);}}/>
                    </Stack>
                  </Card>
                
                  // <Certificate key={j} file={img} />
                )
              })}
            </Grid>
          </Card>
        );
      })}
    </Box>
  );
}

export default ShowDoc;
