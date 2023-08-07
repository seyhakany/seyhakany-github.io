"use client";
import React from "react";
import Title from "../Title";
import styled from "@emotion/styled";
import colorVariables from "@/assets/style/variables";
import Image from "next/image";

import AngularLogo from "../../assets/images/angular.png";
import VueLogo from "../../assets/images/vue.png";
import ReactLogo from "../../assets/images/react.png";

const experiences = [
  {
    position: "Cleaner manager",
    date: "DEC 20, 2018",
    company: "Company A",
    detail: ["coding", "testing", "deploying"],
  },
];

const educations = [
  {
    school: "School A",
    date: "DEC 20, 2000",
  },
];

const technicalSkills = [
  {
    name: "Angular (6)",
    image: AngularLogo,
    level: "low",
    description: "maintenance existing web application",
  },
  {
    name: "Vue (2 , nuxt-js)",
    image: VueLogo,
    level: "medium",
    description: "working with US project",
  },
  {
    name: "React (16+, next-js)",
    image: ReactLogo,
    level: "high",
    description: "working with a lot of projects",
  },
];

const StyledContentWrapper = styled("div")({
  display: "flex",
  fontSize: "14px",
  "& label": {
    marginRight: "20px",
    color: colorVariables.gray67,
  },
});

const StyledTechnical = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 50,
  maxWidth: "750px",
  margin: "auto",
  color: colorVariables.gray67,
  "& .tech": {
    textAlign: "center",
  },
});

const AboutPage = () => {
  return (
    <div id="about">
      <Title>About Me</Title>
      <p>{`I'm a frontend web developer.`}</p>
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
                <div>{t?.level}</div>
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
