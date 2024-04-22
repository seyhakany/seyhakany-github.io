"use client";
import React from "react";
import styled from "@emotion/styled";
import Social from "./Social";
import colorVariables, { transition } from "@/style/variables";
import Navigation from "./Navigation";
import ScrollToTopFab from "./ScrollToTop";
import ModeToggle from "./ModeToggle";
import ComingSoonHeader from "./ComingSoonHeader";

const StyledRootLayoutContainer = styled("div")({
  height: "calc(100vh - 200px)",
  position: "relative",
  zIndex: 1,
  paddingTop: "100px",
  transition: transition.theme,
});

const RootLayoutContainer = ({ children }: { children: any }) => {
  return (
    <>
      <ComingSoonHeader />
      <StyledRootLayoutContainer>
        <Navigation />
        <Social />
        <ScrollToTopFab />
        <ModeToggle />
        {children}
        {/* <Footer /> */}
      </StyledRootLayoutContainer>
    </>
  );
};

export default RootLayoutContainer;
