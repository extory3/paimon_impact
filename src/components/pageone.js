import React from "react";
import ReactDOM from "react-dom";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Grid, Box } from "theme-ui";
function PageOne() {
  return (
    <div
      sx={{
        pl: [1, 2, 3],
        pr: [1, 2, 3],
        pt: [1, 2, 3],
        pb: 1,
        display: "flex",
        flexDirection: "column",
        // minHeight: '100vh',
        height: "100vh",
        width: "100vw",
        bg: "#000080",
      }}
    >
      <Grid
        sx={{
          height: "100vh",
        }}
        columns={[1, "1fr 2fr"]}
      >
        <Box>1</Box>
        <Box>2</Box>
        <Box>Paimon</Box>
        <Box>4</Box>
      </Grid>
    </div>
  );
}

export default PageOne;
