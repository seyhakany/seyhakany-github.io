"use client";
import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import useResize from "@/hooks/use-window-resize";
import useDebounce from "@/hooks/use-debounce";
import { Box, Grid, Theme } from "@mui/material";
import Image from "next/image";
import Profile from "../../assets/images/kany.jpeg";
// import Resume from "../../assets/files/resume.pdf";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import colorVariables from "@/assets/style/variables";
import MacNavigation from "../layouts/MacNavigation";

import { Graduate } from "@next/font/google";
import CustomButton from "../CustomButton";
import Link from "next/link";

const Graduate_Font = Graduate({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

const StyledHomePage = styled("div")((props) => {
  const mode = (props.theme as Theme).palette.mode;
  return {
    background:
      mode === "dark" ? colorVariables.dark_charcoal : colorVariables.gray67,
    position: "relative",
    border: `1px solid ${
      mode === "dark" ? colorVariables.dark_charcoal : colorVariables.gray67
    }`,
    maxWidth: "100%",
    // minHeight: "100%",
    height: "100vh",
    maxHeight: "700px",
    margin: "auto",
    borderRadius: 15,
    overflow: "hidden",
    zIndex: 1,
    "& .bg-skew": {
      position: "absolute",
      width: "60%",
      height: "100%",
      inset: 0,
      background: mode === "dark" ? colorVariables.black : colorVariables.white,
      transform: "skew(50deg)",
      transformOrigin: "bottom left",
      transition: "0.2s ease",
      zIndex: 0,
    },
    "& .card-container": {
      position: "absolute",
      width: "100%",
      height: "100%",
      inset: 0,
      padding: 10,
      display: "flex",

      "& .profile-container-image, & .profile-container-text": {
        width: "50%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 20,
        textAlign: "center",
        gap: 20,
        margin: "auto",
      },
      "& .profile-container-image .profile-image": {
        position: "relative",
        "& img": {
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
      "& .profile-container-text": {
        fontSize: 30,
      },
    },
  };
});

const HomePage = () => {
  const { width } = useResize();
  const bgSkewRef = useRef(null);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const element = bgSkewRef.current as any;
    if (bgSkewRef.current && width > 495) {
      element.style.transform = `skew(${(width / 100) * 1.5}deg)`;
      element.style.width = `60%`;
    }

    if (cardContainerRef.current) {
      const cardContainerElement = cardContainerRef.current as any;
      cardContainerElement.style.flexDirection = width < 495 ? "column" : "row";
      if (width < 495) {
        element.style.transform = `rotate(90deg) translateX(-125%) scale(1.5)`;
        element.style.width = `100%`;
      }
    }
  }, [width]);

  return (
    <StyledHomePage id="home">
      <div className="bg-skew" ref={bgSkewRef} />
      <MacNavigation />
      <div className="card-container" ref={cardContainerRef}>
        <div className="profile-container-image">
          <div className="profile-image">
            <Image
              src={Profile}
              alt="profile image"
              width={200}
              height={200}
              quality={100}
            />
          </div>
          <a href="/pdfs/resume.pdf" target="_blank">
            <CustomButton sx={{ padding: "5px 10px" }}>Resume</CustomButton>
          </a>
        </div>
        <div className="profile-container-text">
          <RoughNotationGroup show>
            <div>
              Hi, My name is{" "}
              <RoughNotation type="highlight" multiline color="#00CA4E">
                <span className={Graduate_Font.className}>
                  CHHENG SEYHAKANY
                </span>
              </RoughNotation>
            </div>
            <div>
              I am a{" "}
              <RoughNotation
                type="box"
                multiline
                color={colorVariables.warning}
                strokeWidth={5}
              >
                <span className={Graduate_Font.className}>
                  FRONTEND DEVELOPER
                </span>
              </RoughNotation>
            </div>
          </RoughNotationGroup>
        </div>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
