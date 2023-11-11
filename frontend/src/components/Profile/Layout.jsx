import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";

export const WhiteContainer = styled("div")({
  backgroundColor: "var(--white)",
  padding: "2rem 3rem",
  borderRadius: "1rem",
});

export const GridWrapper = styled(Grid)({
  paddingBottom: "1rem",
  paddingTop: "1rem",
});

export const GridElementWrapper = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "0.2rem",
  marginBottom: "0.5rem",
});

export const GridElementWrapperRight = styled(GridElementWrapper)({
  paddingLeft: "2rem",
});

export const left = 3;
export const right = 9;
export const full = 12;
