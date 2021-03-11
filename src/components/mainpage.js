import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Keyframes } from "react-spring/renderprops";
import { useSpring, animated, config } from "react-spring";
import delay from "delay";
import Button from "./button.js";
import { Colors } from "./colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as GenshinLogo } from "../svg/genshin_logo.svg";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Grid, Box, Image, Text, Styled, AspectImage } from "theme-ui";

const interp = (r) =>
  `translate3d(0, ${15 * Math.sin(r + (2 * Math.PI) / 1.6)}px, 0)`;
function MainPage(props) {
  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 5000 },
    reset: true,
  });
  return (
    <div
      sx={{
        fonts: '"Avenir Next", sans-serif',
        display: "flex",
        flexDirection: "column",
        // minHeight: '100vh',
        height: "100%",
        width: "100%",
        bg: `${props.backgroundColor}`,
      }}
    >
      <header
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          variant: "styles.header",
        }}
      >
        <GenshinLogo
          sx={{ mt: 3, ml: 3, width: "100px", height: "100px", fill: "red" }}
        />
        <div sx={{ mx: "auto" }} />

        <Button
          data="About Character"
          textColorBtn={props.textColorBtn}
          link={props.link}
          backgroundColorBtn={props.backgroundColorBtn}
          secondaryBackground={props.secondaryBackground}
        />
      </header>
      <main sx={{ height: "100%" }}>
        <Grid sx={{ height: "100%", width: "100%" }} columns={[1, "1fr 1fr"]}>
          <Box
            sx={{
              width: "100%",

              color: `${props.primaryText}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Styled.div
              sx={{
                width: ["60%", "70%", "80%"],
              }}
            >
              <Styled.h1
                sx={{
                  fontSize: [5, 6, 7],
                  lineHeight: 1.5,
                  fontWeight: "bold",
                }}
              >
                {props.title}
              </Styled.h1>
              <Styled.h2 sx={{ fontSize: [4, 5, 6], lineHeight: 1 }}>
                {props.sub_title}
              </Styled.h2>
              <Styled.div>
                {" "}
                <Styled.h6 sx={{ fontSize: [3, 4], lineHeight: 1.5 }}>
                  {props.description}
                </Styled.h6>
              </Styled.div>
              <Styled.div sx={{ mt: 10 }}>
                <Styled.h6 sx={{ lineHeight: 1.5, mb: 2 }}>
                  Want to download? Join:
                </Styled.h6>
                <Styled.a
                  href="https://apps.apple.com/us/app/genshin-impact/id1517783697"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/app_store.png"
                    sx={{ width: ["100px", "140px", "180px"] }}
                  />
                </Styled.a>
                <Styled.a
                  href="https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=en&gl=US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/google_play.png"
                    sx={{ width: ["100px", "140px", "180px"] }}
                  />
                </Styled.a>
              </Styled.div>
            </Styled.div>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: ["90%", "100%"],
            }}
          >
            <animated.div
              style={{
                transform: radians.interpolate(interp),
              }}
            >
              <Image
                src={props.png}
                sx={{
                  width: ["65%", "100%", "80%", "50%"],
                  height: ["65%", "100%", "80%", "100%"],
                }}
              />
            </animated.div>
          </Box>
        </Grid>
      </main>
      <footer sx={{}}>
        <Styled.a
          href="https://github.com/extory3"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FontAwesomeIcon
            sx={{
              cursor: "pointer",
              color: props.primaryText,
              transition: "all .15s ease-in-out",
              "&:hover": {
                transform: "scale(1.3)",
              },
            }}
            icon={faGithub}
          />
        </Styled.a>
      </footer>
    </div>
  );
}

export default MainPage;
// <Grid
//   sx={{
//     height: "100vh",
//   }}
//   columns={[1, "1fr 2fr"]}
// >
//   <Box>1</Box>
//   <Box>2</Box>
//   <Box>Paimon</Box>
//   <Box>4</Box>
// </Grid>
