import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import Button from "@mui/material/Button";
import React, { useContext, useState } from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

import axios from "axios";

import { context } from "../../App";

export const WhiteContainer = styled("div")({
  backgroundColor: "var(--white)",
  padding: "2rem 3rem",
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const WhiteContainerEdit = ({ children, overlayChildren }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <React.Fragment>
      {isOverlayOpen && (
        <WhiteContainerOverlay setIsOverlayOpen={setIsOverlayOpen}>
          {overlayChildren}
        </WhiteContainerOverlay>
      )}
      <WhiteContainer>
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "-2.2rem",
            cursor: "pointer",
            zIndex: "100",
          }}
        >
          <EditRoundedIcon
            style={{
              marginTop: "0.5rem",
              marginLeft: "auto",
            }}
            onClick={() => {
              setIsOverlayOpen(true);
            }}
          />
        </div>
        {children}
      </WhiteContainer>
    </React.Fragment>
  );
};
export const WhiteContainerOverlay = ({ children, setIsOverlayOpen }) => {
  const { userId, userType } = useContext(context);
  const patchData = async () => {
    const data = { memberType: userType.toUpperCase(), email: "hi" };
    console.log(userId, "hihihi");
    try {
      const response = await axios.patch(
        `http://43.202.86.217/api/v1/member/${userId}`,
        data,
        {
          headers: {
            Authorization: userId,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1000000",
        backgroundColor: "rgba(151, 155, 252, 0.90)",
        width: "100vw",
        height: "100vh",
        overflow: "scroll",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "fixed",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "-8rem",
        }}
      >
        <CloseRoundedIcon
          style={{
            margin: "3rem",
            marginLeft: "auto",
            cursor: "pointer",
            fontSize: "2.5rem",
          }}
          onClick={() => {
            setIsOverlayOpen(false);
          }}
        />
      </div>
      <div
        style={{
          padding: "4rem 8rem",
          maxWidth: "1200px",
          minWidth: "1200px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <WhiteContainer>
          {children}
          <div
            style={{
              bottom: "0",
              width: "100%",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              style={{
                marginLeft: "auto",
                padding: "0.7rem 3rem",
                cursor: "pointer",
                borderRadius: "3rem",
                backgroundColor: "var(--purple4)",
              }}
              onClick={patchData}
            >
              제출
            </Button>
          </div>
        </WhiteContainer>
      </div>
    </div>
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
