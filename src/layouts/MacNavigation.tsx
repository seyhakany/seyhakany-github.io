"use client";
import styled from "@emotion/styled";
import React from "react";
import { Tooltip } from "@mui/material";
import { navigation } from "./data";

const StyledMacNavigation = styled("div")({
  position: "absolute",
  display: "flex",
  gap: 8,
  right: "10px",
  zIndex: 1,
  top: "10px",

  "& .nav-dot": {
    width: "20px",
    height: "20px",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "& .icon": {
      fontSize: 13,
      color: "white",
      opacity: 0,
      //   transform: "scale(0)",
      transition: "0.3s ease-in",
    },
    "&:hover": {
      ".icon": {
        opacity: 1,
        // transform: "scale(1)",
        transition: "0.3s ease-in",
      },
    },
  },
});

const MacNavigation = () => {
  return (
    <StyledMacNavigation>
      {navigation?.map((m) => {
        return (
          <Tooltip key={m?.label} title={m?.label}>
            <a href={`#${m?.link}`}>
              <div className="nav-dot" style={{ background: m?.background }}>
                {m?.icon}
              </div>
            </a>
          </Tooltip>
        );
      })}
    </StyledMacNavigation>
  );
};

export default MacNavigation;
