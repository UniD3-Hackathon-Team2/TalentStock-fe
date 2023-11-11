import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children, style }) {
  return (
    <React.Fragment>
      <NavBar />
      <div
        style={{
          background: "linear-gradient(251deg, #8A6AE3 7.73%, #3338B3 100%)",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            padding: "10rem 8rem",
            display: "flex",
            flexDirection: "column",
            ...style,
          }}
        >
          {children}
        </div>
      </div>
    </React.Fragment>
  );
}
