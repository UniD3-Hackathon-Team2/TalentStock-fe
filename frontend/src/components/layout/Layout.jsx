import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div
      style={{
        background: "linear-gradient(251deg, #8A6AE3 7.73%, #3338B3 100%)",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <div style={{ margin: "6rem 8rem" }}>{children}</div>
    </div>
  );
}
