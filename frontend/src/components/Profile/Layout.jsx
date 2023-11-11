import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import Button from "@mui/material/Button";
import React from "react";

export const WhiteContainer = styled("div")({
  backgroundColor: "var(--white)",
  padding: "2rem 3rem",
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const WhiteContainerOverlay = ({ children, setIsOpen }) => {
  return (
    <React.Fragment>
      <WhiteContainer>
        <div
          style={{
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "-2rem",
          }}
        >
          <CloseRoundedIcon
            style={{
              marginTop: "0.5rem",
              marginLeft: "auto",
              cursor: "pointer",
            }}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </div>
        {children}
        <div
          style={{
            bottom: "0",
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "flex-end",
            background: "red",
          }}
        >
          <Button
            variant="contained"
            style={{
              marginLeft: "auto",
              padding: "0.5rem 1rem",
              cursor: "pointer",
            }}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            재출
          </Button>
        </div>
      </WhiteContainer>
    </React.Fragment>
  );
};

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
