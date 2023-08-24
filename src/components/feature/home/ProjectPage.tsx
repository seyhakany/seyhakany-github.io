"use client";
import React from "react";
import { Grid, Theme } from "@mui/material";
import styled from "@emotion/styled";
import SEAGAME from "/public/images/projects/SEAGAME.png";
import BQuest from "/public/images/projects/bquest.svg";
import KhmerCare from "/public/images/projects/khmer-care.svg";
import Stars from "/public/images/projects/stars.png";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import colorVariables, { transition } from "@/style/variables";
import useResize from "@/hooks/use-window-resize";
import CustomButton from "@/components/common/CustomButton";
import Title from "@/components/common/Title";

const projects = [
  {
    // name: "Project A",
    name: "GMS and TMS",
    img: SEAGAME,
    description: `GMS (Game Management System): this project used to manage the entry by name, entry by number of 11 countries who participate in the Seagame 32nd.
    Catering, Transportation, Card Control, Accreditation registration, Arrival Departure and more. TMS (Ticketing Management System): this project used to manage ticket for all sports in Seagame 32nd.`,
    year: "2023",
  },
  {
    name: "BQuest",
    img: BQuest,
    description: `BQuest is A New Do-It-Yourself Estate Planning Tool That is A Digital Way To Ensure The Things You Value Will Legally Make It Into The Right Hands After You’re Gone. With BQuest, You Can Catalog Your Possessions Into A Secure Digital Vault Which Automatically Updates Your Estate Summary, Your Letter Of Wishes, Your Will, Or Your Declaration Of Trust. Update It At Anytime.`,
    year: "2022",
  },
  {
    name: "KhmerCare",
    img: KhmerCare,
    description: `Cambodia's first crowdfunding platform! Help support local causes and the people you love from near and far. KhmerCare is a trusted and fully transparent system created to simplify making an immediate impact on people's lives.`,
    year: "2022",
  },
  {
    name: "Stars",
    img: Stars,
    description: `Is an HR tool that increases the engagement level of employees through timely recognition by giving out rewards. This reward​ program is intended to recognize and motivate staff by awarding "Stars"​similar to any loyalty​ program. These​ "Stars" are typically awarded by managers, however, given its flexibility, other staff members may award “Stars” as well - designed to mimic a 360-degree feedback mechanism. Staff members may use their earned or rewarded "Stars" to bid in an auction or redeem rewards via an integrated catalog of prizes.`,
    year: "2019",
  },
];

const StyledProject = styled("div")((props) => {
  const mode = (props.theme as Theme).palette.mode;
  return {
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
    border: `1px solid ${
      mode === "dark" ? colorVariables.dark_charcoal : colorVariables.gray67
    }`,
    justifyContent: "space-between",
    position: "relative",
    transition: transition.theme,
    zIndex: 1,
    "& .project-name": {
      display: "inline-block",
      position: "relative",
      transformOrigin: "center",
    },
    "& .border": {
      transition: transition.theme,
      transform: "translate(0px, 0px)",
    },
    "&:hover": {
      "& .project-name": {
        position: "relative",
        animation: "bounce 5s infinite",
      },
      "& .img-container": {
        transform: "scale(1.2) translate(0, 0) rotate(-20deg)",
        transition: transition.theme,
        "& .border": {
          transition: transition.theme,
          position: "absolute",
          content: "' '",
          inset: 0,
          border: `2px solid ${colorVariables.warning}`,
          transform: "translate(-10px, -10px) rotate(20deg)",
          zIndex: 0,
          background:
            mode === "dark" ? colorVariables.black : colorVariables.white,
        },
      },
    },
    "& .img-container": {
      transition: transition.theme,
      position: "relative",
      width: "200px",
      height: "200px",
      transform: "scale(1.2) translate(-10px, -10px)",
      transformOrigin: "bottom left",

      "& img": {
        zIndex: 1,
        position: "relative",
        margin: "0 !important",
        background:
          mode === "dark"
            ? colorVariables.dark_charcoal
            : colorVariables.gray67,
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
  };
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
                          style={{
                            objectFit: "contain",
                          }}
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
