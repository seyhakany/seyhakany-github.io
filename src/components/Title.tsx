"use client";
import colorVariables from "@/assets/style/variables";
import styled from "@emotion/styled";
import React, { ReactNode } from "react";

const StyledTitle = styled("p")({
  fontSize: "30px",
  fontWeight: "bold",
  margin: "15px 0",
  paddingBottom: "15px",
  borderBottom: `1px solid ${colorVariables.dark_charcoal}`,
});
const Title = ({ children }: { children: ReactNode }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
