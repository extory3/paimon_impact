/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from "react";
import { jsx, Styled } from "theme-ui";
import theme from "./fonts.js";
export default function Button(props) {
  return (
    <Styled.a
      sx={{
        textDecoration: "none",
        cursor: "pointer",
        mr: 3,
        mt: 3,
        backgroundColor: props.backgroundColorBtn,
        pt: 3,
        pb: 3,
        pr: 4,
        pl: 4,
        borderRadius: 16,
        "@keyframes fadeInDiv": {
          from: {
            backgroundColor: props.backgroundColorBtn,
          },
          to: {
            backgroundColor: props.secondaryBackground,
          },
        },
        animationDuration: "0.7s",
        "&:hover": {
          backgroundColor: props.textColorBtn,
        },
        "&:hover h5": {
          color: props.backgroundColorBtn,
        },
      }}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Styled.div>
        <Styled.h5
          sx={{
            fontSize: [2, 3, 4],
            fontWeight: "bold",
            color: props.textColorBtn,
            fontFamily:
              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
          }}
        >
          {props.data}
        </Styled.h5>
      </Styled.div>
    </Styled.a>
  );
}
