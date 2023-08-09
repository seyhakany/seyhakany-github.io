"use client";
import colorVariables, { transition } from "@/assets/style/variables";
import styled from "@emotion/styled";
import { Box, BoxProps, Theme } from "@mui/material";
import React, { ReactNode } from "react";

const StyledCustomButton = styled("div")((props) => {
  const mode = (props.theme as Theme).palette.mode;
  return {
    display: "inline-block",
    cursor: "pointer",
    transition: transition.theme,
    position: "relative",

    "& .custom-border": {
      transition: transition.theme,
      position: "absolute",
      width: "100%",
      height: "100%",
      inset: 0,
      zIndex: 0,
    },
    "& .children": {
      fontWeight: 600,
      transition: transition.theme,
      inset: 0,
      color: mode === "dark" ? colorVariables.white : colorVariables.black,
      zIndex: 1,
      position: "relative",
      border: `1px solid ${
        mode === "dark" ? colorVariables.dark_charcoal : colorVariables.gray67
      }`,
      // background: colorVariables.black,
      background: mode === "dark" ? colorVariables.black : colorVariables.white,
    },
    "&:hover": {
      transition: transition.theme,
      "& .custom-border": {
        transition: transition.theme,
        background:
          mode === "dark"
            ? colorVariables.dark_charcoal
            : colorVariables.gray67,
      },
      "& .children": {
        transition: transition.theme,
        transform: "translate(-5px, -5px)",
      },
    },
  };
});

const CustomButton = ({
  children,
  ...rest
}: { children: ReactNode } & BoxProps) => {
  return (
    <StyledCustomButton>
      <div className="custom-border" />
      <Box {...rest} className="children">
        {children}
      </Box>
    </StyledCustomButton>
  );
};

export default CustomButton;
