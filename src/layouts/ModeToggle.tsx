import React, { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";
import colorVariables from "@/style/variables";
import styled from "styled-components";

const StyledModeToggle = styled(IconButton)({
  position: "absolute",
  color: colorVariables.white,
  right: 20,
  top: 20,
  backgroundColor: colorVariables.black,
  transition: "0.3s ease-in-out all",
  "&:hover": {
    backgroundColor: colorVariables.white,
    color: colorVariables.black,
    transition: "0.3s ease-in-out all",
  },
});

const ModeToggle = () => {
  const [mode, setMode] = useState("dark");
  return (
    <StyledModeToggle>
      <DarkModeIcon />
    </StyledModeToggle>
  );
};

export default ModeToggle;
