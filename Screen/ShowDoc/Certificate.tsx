import { Card, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { DocType } from "./DocInterfaces";
import classes from "./DocumentStyle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";

function Certificate(doc: DocType) {
  const [isHover, setIsHover] = useState(true);

  const handleMouseOver = () => {
    setIsHover(false);
  };

  const handleMouseOut = () => {
    setIsHover(true);
  };

  return (
    <>
      <Card
        sx={classes.cardOuter}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Card
          sx={isHover ? classes.cardOverlay : classes.cardOverlayHover}
        ></Card>
        <img style={{ height: "180px" }} src={doc.file} alt={"img"} />
        <Stack
          direction="row"
          spacing={2}
          sx={isHover ? classes.stack : classes.stackHover}
        >
          <VisibilityIcon onClick={() => {console.log(doc.file);}}/>
          <DeleteIcon onClick={() => {console.log(doc.file);}}/>
          <DownloadIcon onClick={() => {console.log(doc.file);}}/>
        </Stack>
      </Card>
    </>
  );
}

export default Certificate;
