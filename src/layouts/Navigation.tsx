"use client";
import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { navigation } from "./data";
import Box from "@mui/material/Box";
import colorVariables from "@/style/variables";
import {
  usePathname,
  useRouter,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import { Theme } from "@mui/material";

const StyledNavigation = styled("div")((props) => {
  console.log(props);
  const mode = (props.theme as Theme).palette.mode;

  return {
    "@keyframe bouncing": {
      from: {
        transform: "translateX(-60px)",
        opacity: 0,
      },
      to: {
        transform: "translateX(0px)",
        opacity: 1,
      },
    },

    background:
      mode === "dark" ? colorVariables.dark_charcoal : colorVariables.gray67,

    position: "fixed",
    right: "0",
    top: "50%",
    display: "flex",
    flexDirection: "column",
    transform: "translateX(60px)",
    transition: "0.2s all ease-in-out",
    zIndex: 10,
    "& .navigation-item": {
      whiteSpace: "nowrap",
      display: "inherit",
      gap: 10,
      justifyContent: "space-between",
      alignItems: "center",
      padding: "5px 10px",
      color: mode === "dark" ? colorVariables.black : colorVariables.white,
      transform: "translateX(0)",
      fontWeight: 600,
      cursor: "pointer",
      background: `${colorVariables.gray67}50`,
      transition: "0.2s ease-in all",
      textDecoration: "none",
      "& span:first-child": {
        display: "flex",
      },
      "&:hover": {
        transition: "0.2s ease-out all",
        transform: "translate(-68px, -5px) scale(1.1)",
        color: colorVariables.white,
      },
    },
  };
});

const Navigation = () => {
  const pathname = usePathname();

  return (
    <>
      <StyledNavigation>
        {navigation?.map((n, index) => {
          return (
            <Box
              key={`navigation_${index}_fixed`}
              className="navigation-item"
              sx={{
                "&:hover": {
                  background: `${n?.background} !important`,
                },
              }}
              component={"a"}
              href={`#${n?.link}`}
            >
              <span>{n?.icon}</span>
              <span>{n?.label}</span>
            </Box>
          );
        })}
      </StyledNavigation>
    </>
  );
};

export default Navigation;
