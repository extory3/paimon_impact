import React from "react";
import ReactDOM from "react-dom";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
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
      <div>Page Two</div>
      <div></div>
    </div>
  );
}

export default PageOne;
