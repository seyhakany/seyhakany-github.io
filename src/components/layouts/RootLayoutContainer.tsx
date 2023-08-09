"use client";
import React from "react";
import styled from "@emotion/styled";
import Social from "./Social";
import colorVariables, { transition } from "@/assets/style/variables";
import Navigation from "./Navigation";
import Footer from "../pages/Footer";
import ScrollToTopFab from "./ScrollToTop";
import ToggleTheme from "./ToggleTheme";

const StyledRootLayoutContainer = styled("div")({
  height: "calc(100vh - 200px)",
  position: "relative",
  zIndex: 1,
  paddingTop: "100px",
  transition: transition.theme,
});

const RootLayoutContainer = ({ children }: { children: any }) => {
  return (
    <StyledRootLayoutContainer>
      <Navigation />
      <Social />
      <ScrollToTopFab />
      {children}
      <Footer />
      <ToggleTheme />
    </StyledRootLayoutContainer>
  );
};

export default RootLayoutContainer;
