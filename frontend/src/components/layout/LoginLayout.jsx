export default function LoginLayout({ children }) {
  return (
    <div
      style={{
        background: "linear-gradient(251deg, #8A6AE3 7.73%, #3338B3 100%)",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          background: "linear-gradient(251deg, #8A6AE3 7.73%, #3338B3 100%)",
          flex: "1",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
      <div
        style={{
          background: "white",
          flex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={"img/logo.jpg"} width={300} alt="logo" />
      </div>
    </div>
  );
}
