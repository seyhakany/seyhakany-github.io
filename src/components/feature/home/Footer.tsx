"use client";
import colorVariables from "@/style/variables";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";
import React from "react";

const StyledCopyRight = styled("div")({
  height: 20,
  textAlign: "center",
  width: "100%",
  color: colorVariables.black,
  marginTop: 50,
  background: `linear-gradient(50deg, ${colorVariables.success} 0%, ${colorVariables.warning} 48%, ${colorVariables.error} 100%)`,
  fontSize: 12,
});

const Footer = () => {
  const pathname = usePathname();

  const currentYear = new Date().getFullYear();
  return (
    <>
      <StyledCopyRight>© {currentYear}, Chheng Seyhakany</StyledCopyRight>
    </>
  );
};

export default Footer;
