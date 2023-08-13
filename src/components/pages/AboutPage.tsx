"use client";
import React from "react";
import Title from "../Title";
import styled from "@emotion/styled";
import colorVariables from "@/assets/style/variables";
import Image from "next/image";

import AngularLogo from "../../assets/images/angular.png";
import VueLogo from "../../assets/images/vue.png";
import ReactLogo from "../../assets/images/react.png";
import { Theme } from "@mui/material";

const experiences = [
  {
    position: `Intern, 
    Junior Web Developer, 
    Senior Web Developer (present)`,
    date: "Sep 2019 - Present",
    company: "Pathmazing Inc",
    detail: ["coding", "testing", "deploying"],
  },
];

const educations = [
  {
    school: "Bachelor of Computer Science, Royal University of Phnom Penh",
    date: "2014 - 20218",
  },
];

const technicalSkills = [
  {
    name: "Angular (6)",
    image: AngularLogo,
    level: "LOW",
    description: "maintenance existing web application",
    color: colorVariables.error,
  },
  {
    name: "Vue (2 , nuxt-js)",
    image: VueLogo,
    level: "MEDIUM",
    description: "working with US project",
    color: colorVariables.warning,
  },
  {
    name: "React (16+, next-js)",
    image: ReactLogo,
    level: "HIGH",
    description: "working with a lot of projects",
    color: colorVariables.success,
  },
];

const StyledContentWrapper = styled("div")((props) => {
  const mode = (props.theme as Theme).palette.mode;
  return {
    display: "flex",
    fontSize: "14px",
    "& label": {
      marginRight: "20px",
      color: mode === "dark" ? colorVariables.gray67 : colorVariables.black,
    },
  };
});

const StyledTechnical = styled("div")((props) => {
  const mode = (props.theme as Theme).palette.mode;
  return {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 50,
    maxWidth: "750px",
    margin: "auto",
    color: mode === "dark" ? colorVariables.gray67 : colorVariables.black,
    "& .tech": {
      textAlign: "center",
    },
  };
});

const AboutPage = () => {
  return (
    <div id="about" style={{ fontWeight: 600 }}>
      <Title>About Me</Title>
      <p>{`Meticulous Web Developer with over 3 years of front-end experience and passion for responsive website design.`}</p>
      <div>
        <div>Education:</div>
        <div style={{ marginBottom: "10px" }}>
          {educations?.map((e, index) => {
            return (
              <StyledContentWrapper key={`education_${index}`}>
                <label>{e?.date}</label>
                <div className="content">
                  <div className="main">{e?.school}</div>
                </div>
              </StyledContentWrapper>
            );
          })}
        </div>
        <div>Experience:</div>
        <div style={{ marginBottom: "20px" }}>
          {experiences?.map((e, index) => {
            return (
              <StyledContentWrapper key={`education_${index}`}>
                <label>{e?.date}</label>
                <div className="content">
                  <div className="main">{e?.company}</div>
                  <div className="sub">{e?.position}</div>
                </div>
              </StyledContentWrapper>
            );
          })}
        </div>
        <div style={{ marginBottom: "10px" }}>Technical Skills:</div>
        <StyledTechnical>
          {technicalSkills?.map((t, index) => {
            return (
              <div className="tech" key={`tech_${index}`}>
                <Image src={t?.image} width={100} height={90} alt={t?.name} />
                <div>{t?.name}</div>
                <div>
                  <span>Level: </span>
                  <span style={{ color: t?.color, fontWeight: "bold" }}>
                    {t?.level}
                  </span>
                </div>
                <div>{t?.description}</div>
              </div>
            );
          })}
        </StyledTechnical>
      </div>
    </div>
  );
};

export default AboutPage;
