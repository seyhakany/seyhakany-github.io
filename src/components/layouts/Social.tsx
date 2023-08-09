import styled from "@emotion/styled";
import React from "react";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import colorVariables, { transition } from "@/assets/style/variables";
import Box from "@mui/material/Box";
import { Theme, useTheme } from "@mui/material";

const buttons = [
  {
    icon: <FacebookIcon />,
    label: "facebook",
    background: colorVariables.facebook,
    link: "https://stackoverflow.com/questions/75302340/not-found-page-does-not-work-in-next-js-13",
  },
  {
    icon: <LinkedInIcon />,
    label: "linkedIn",
    background: colorVariables.linkedIn,
    link: "https://stackoverflow.com/questions/75302340/not-found-page-does-not-work-in-next-js-13",
  },
];

const StyledSocial = styled("div")((props) => {
  const mode = (props.theme as Theme).palette.mode
  return {
    "@keyframes borderRipple": {
      from: {
        border: `1px solid ${mode === "dark" ? colorVariables.gray67 : colorVariables.dark_charcoal}`,
        opacity: 1,
        transform: "scale(0)",
      },
      to: {
        border: `1px solid ${mode === "dark" ? colorVariables.gray67 : colorVariables.dark_charcoal}`,
        opacity: 0,
        transform: "scale(35)",
      },
    },
    position: "absolute",
    display: "table",
    gap: 5,
    flexDirection: "column",
    top: "20px",
    left: "20px",
    textDecoration: "unset",
    "& .ripple-container": {
      position: "relative",
      inset: 0,
      textDecoration: "unset",
      "&:hover": {
        "& .ripple-border": {
          position: "absolute",
          borderRadius: "50px",
          width: "100%",
          height: "100%",
          inset: 0,
          transformOrigin: "center",
          animation: "borderRipple 1.5s infinite",
        },
      },
    },
  };
});

const StyledSocialButton = styled(IconButton)(
  ({ custombackground }: { custombackground?: string }) => ({
    transition: transition.theme,
    zIndex: 1,
    background: `transparent`,
    "&:hover": {
      background: `${custombackground}`,
      color: colorVariables.white,
      transition: transition.theme,
    },
  })
);

const Social = () => {
  const theme = useTheme();
  return (
    <StyledSocial>
      {buttons?.map((button) => (
        <Box
          className="ripple-container"
          style={{ position: "relative" }}
          key={button?.label}
        >
          <Box component="a" href={button?.link} target="_blank">
            <StyledSocialButton
              custombackground={button.background}
              aria-label={button?.label}
            >
              {button?.icon}
            </StyledSocialButton>
          </Box>
          <div className="ripple-border" />
        </Box>
      ))}
    </StyledSocial>
  );
};

export default Social;
