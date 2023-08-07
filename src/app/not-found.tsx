"use client";
import styled from "@emotion/styled";
import React from "react";
import { Press_Start_2P } from "@next/font/google";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";

const pressStartP2Font = Press_Start_2P({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

const StyledNotFound = styled("div")({
  height: "calc(100vh - 171px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
  overflow: "hidden",
  textAlign: "center",
  "& .not-found-text": {
    fontSize: "15px",
  },
  "& .not-found-code": {
    fontSize: "8rem",
  },
});

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <StyledNotFound>
      <div className={pressStartP2Font.className}>
        <div className="not-found-code">404</div>
        <div className="not-found-text">Whoops, nothing to see here.</div>
      </div>
      <CustomButton
        sx={{ padding: "5px 30px", fontSize: "25px" }}
        onClick={() => router.push("/")}
      >
        Go Home
      </CustomButton>
    </StyledNotFound>
  );
};

export default NotFoundPage;
