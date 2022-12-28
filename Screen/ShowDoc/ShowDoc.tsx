import { Box, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useState } from "react";
import Certificate from "./Certificate";

const initDocs = [
  {
    name: "Deep Morker",
    file: [1],
  },
  {
    name: "Arya Morker",
    file: [2, 3],
  },
];

function ShowDoc() {
  const [documents, setDocuments] = useState(initDocs);
  return (
    <Box>
      {documents.map((doc, i) => {
        return (
          <Card key={i}>
            <Typography sx={{ margin: "20px" }}>
              {" "}
              <h3>Name : {doc.name}</h3>{" "}
            </Typography>
            <Grid
              container
              direction={"row"}
              sx={{ margin: "20px" }}
              spacing={5}
            >
              {doc.file.map((img, i) => {
                // console.log(typeof(img))
                return <Certificate file={img} />;
              })}
            </Grid>
          </Card>
        );
      })}
    </Box>
  );
}

export default ShowDoc;
