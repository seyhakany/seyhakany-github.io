"use client";
import React from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import ProjectA from "../../assets/images/project_a.png";
import ProjectB from "../../assets/images/project_b.png";
import ProjectC from "../../assets/images/project_c.png";
import ProjectD from "../../assets/images/project_d.png";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Title from "../Title";
import colorVariables from "@/assets/style/variables";
import CustomButton from "../CustomButton";
import useResize from "@/hooks/use-window-resize";

const projects = [
  {
    name: "Project A",
    img: ProjectA,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    year: "2019",
  },
  {
    name: "Project B",
    img: ProjectB,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    year: "2020",
  },
  {
    name: "Project C",
    img: ProjectC,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    year: "2021",
  },
  {
    name: "Project D",
    img: ProjectD,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    year: "2022 - 2023",
  },
];

const StyledProject = styled("div")({
  "@keyframes bounce": {
    "0%": {
      transform: "translateY(0px) scale(1) rotate(0)",
      transformOrigin: "center",
    },
    "25%": {
      transform: "translateY(3px) scale(1.1) rotate(5deg)",
      transformOrigin: "center",
    },
    "35%": {
      transform: "translateY(5px) scale(1.3) rotate(-10deg)",
      transformOrigin: "center",
    },
    "50%": {
      transform: "translateY(3px) scale(1.2) rotate(10deg)",
      transformOrigin: "center",
    },
    "70%": {
      transform: "translateY(7px) scale(1.4) rotate(-5deg)",
      transformOrigin: "center",
    },
    "85%": {
      transform: "translateY(5px) scale(1.2) rotate(5deg)",
      transformOrigin: "center",
    },
    "100%": {
      transform: "translateY(0px) scale(1) rotate(0)",
      transformOrigin: "center",
    },
  },
  display: "flex",
  border: `1px solid ${colorVariables.dark_charcoal}`,
  // margin: "60px 0",
  justifyContent: "space-between",
  position: "relative",
  transition: "0.1s ease-in-out all",
  zIndex: 1,
  "& .project-name": {
    display: "inline-block",
    position: "relative",
    transformOrigin: "center",
  },
  "& .border": {
    transition: "0.1s ease-in-out all",
    transform: "translate(0px, 0px)",
  },
  "&:hover": {
    "& .project-name": {
      position: "relative",
      animation: "bounce 5s infinite",
    },
    "& .img-container": {
      transform: "scale(1.2) translate(0, 0) rotate(-20deg)",
      transition: "0.2s ease-in-out all",
      "& .border": {
        transition: "0.1s ease-in-out all",
        position: "absolute",
        content: "' '",
        inset: 0,
        border: `2px solid ${colorVariables.white}`,
        transform: "translate(-10px, -10px) rotate(20deg)",
        zIndex: 0,
        background: colorVariables.black
      },
    },
  },
  "& .img-container": {
    transition: "0.2s ease-in-out all",
    position: "relative",
    width: "200px",
    height: "200px",
    transform: "scale(1.2) translate(-10px, -10px)",
    transformOrigin: "bottom left",

    "& img": {
      zIndex: 1,
      position: "relative",
      margin: "0 !important",
      background: colorVariables.dark_charcoal,
      padding: "10px",
    },
  },

  "& .year-badge": {
    position: "absolute",
    bottom: 0,
    height: 25,
    background: colorVariables.error,
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const ProjectPage = () => {
  const checkIndex = (index: number) => index % 2 === 0;
  const { width } = useResize();

  return (
    <div id="project">
      <Title>Projects</Title>
      <Grid container columnSpacing={2}>
        <Grid item md={12}>
          <RoughNotationGroup show>
            {projects?.map((project, index) => {
              return (
                <div style={{ margin: "60px 0" }} key={`${index}_project`}>
                  <CustomButton sx={{ padding: "unset !important" }}>
                    <StyledProject
                      key={`${index}_project`}
                      style={{
                        flexDirection:
                          width < 580
                            ? "column"
                            : checkIndex(index)
                            ? "row"
                            : "row-reverse",
                      }}
                    >
                      <div
                        className="img-container"
                        style={{ alignSelf: width < 580 ? "center" : "unset" }}
                      >
                        <div className="border"></div>
                        <Image
                          src={project?.img}
                          alt={project?.name}
                          width={180}
                          height={180}
                        />
                      </div>
                      <div
                        style={{
                          textAlign: checkIndex(index) ? "start" : "end",
                          padding:
                            width < 580 ? "0 20px 0 20px" : "0 75px 0 75px",
                        }}
                      >
                        <div className="project-name">
                          <h2 style={{ color: "#000" }}>
                            <RoughNotation
                              type="highlight"
                              multiline
                              color={colorVariables.success}
                            >
                              {project?.name}
                            </RoughNotation>{" "}
                          </h2>
                        </div>
                        <p>{project?.description}</p>
                      </div>
                      <div
                        className="year-badge"
                        style={{
                          left: checkIndex(index) ? "unset" : 0,
                          right: checkIndex(index) ? 0 : "unset",
                        }}
                      >
                        {project?.year}
                      </div>
                    </StyledProject>
                  </CustomButton>
                </div>
              );
            })}
          </RoughNotationGroup>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectPage;