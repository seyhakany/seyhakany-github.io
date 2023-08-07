"use client";
import React from "react";
import styled from "@emotion/styled";
import Social from "./Social";
import colorVariables from "@/assets/style/variables";
import Navigation from "./Navigation";
import Footer from "../pages/Footer";
import ScrollToTopFab from "./ScrollToTop";

const StyledRootLayoutContainer = styled("div")({
  background: colorVariables.black,
  color: colorVariables.white,
  height: "calc(100vh - 200px)",
  position: "relative",
  zIndex: 1,
  paddingTop: "100px",
});

const RootLayoutContainer = ({ children }: { children: any }) => {
  return (
    <StyledRootLayoutContainer>
      <Navigation />
      <Social />
      <ScrollToTopFab />
      {children}
      <Footer />
    </StyledRootLayoutContainer>
  );
};

export default RootLayoutContainer;
