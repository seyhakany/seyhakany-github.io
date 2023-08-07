import styled from "@emotion/styled";
import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Fab, Zoom, useScrollTrigger } from "@mui/material";
import { useCallback } from "react";

const StyledButton = styled(Box)({
  position: "fixed",
  bottom: 32,
  right: 32,
  zIndex: 1,
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
