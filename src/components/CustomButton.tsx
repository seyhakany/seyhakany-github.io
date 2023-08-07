import colorVariables from "@/assets/style/variables";
import styled from "@emotion/styled";
import { Box, BoxProps } from "@mui/material";
import React, { ReactNode } from "react";

const StyledCustomButton = styled("div")({
  display: "inline-block",
  cursor: "pointer",
  transition: "0.2s all ease-in-out",
  position: "relative",
  background: colorVariables.black,
  color: "transparent",

  "& .custom-border": {
    transition: "0.1s all ease-in-out",
    position: "absolute",
    width: "100%",
    height: "100%",
    inset: 0,
    zIndex: 0,
  },
  "& .children": {
    transition: "0.1s all ease-in-out",
    inset: 0,
    color: colorVariables.white,
    zIndex: 1,
    position: "relative",
    border: `1px solid ${colorVariables.dark_charcoal}`,
    background: colorVariables.black,
  },
  "&:hover": {
    transition: "0.1s all ease-in-out",
    "& .custom-border": {
      transition: "0.1s all ease-in-out",
      background: colorVariables.dark_charcoal,
    },
    "& .children": {
      transition: "0.1s all ease-in-out",
      transform: "translate(-5px, -5px)",
    },
  },
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
