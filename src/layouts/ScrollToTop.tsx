import colorVariables from "@/style/variables";
import styled from "@emotion/styled";
import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Fab, Theme, Zoom, useScrollTrigger } from "@mui/material";
import { useCallback } from "react";

const StyledButton = styled(Box)((props) => {
  const mode = (props.theme as Theme).palette.mode;
  return {
    position: "fixed",
    bottom: 32,
    right: 32,
    zIndex: 999,
    "& .MuiFab-root": {
      background:
        mode === "dark" ? colorVariables.light_mode : colorVariables.dark_mode,
      color: colorVariables.white,
      "&:hover": {
        background: `${
          mode === "dark" ? colorVariables.light_mode : colorVariables.dark_mode
        }90`,
      },
    },
  };
});

function ScrollToTopFab() {
  // Use `window` instead of `body` as `document` will be `undefined` when the
  // hooks first runs. By default, useScrollTrigger will attach itself to `window`.
  const trigger = useScrollTrigger({
    // Number of pixels needed to scroll to toggle `trigger` to `true`.
    threshold: 100,
  });
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Zoom in={trigger}>
      <StyledButton
        role="presentation"
        // Place the button in the bottom right corner.
      >
        <Fab onClick={scrollToTop} size="small" aria-label="Scroll back to top">
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </StyledButton>
    </Zoom>
  );
}
export default ScrollToTopFab;
