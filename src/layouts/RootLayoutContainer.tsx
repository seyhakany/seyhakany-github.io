"use client";
import React from "react";
import styled from "@emotion/styled";
import Social from "./Social";
import colorVariables, { transition } from "@/style/variables";
import Navigation from "./Navigation";
import ScrollToTopFab from "./ScrollToTop";
import ToggleTheme from "./ToggleTheme";
import Footer from "@/components/feature/home/Footer";

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
