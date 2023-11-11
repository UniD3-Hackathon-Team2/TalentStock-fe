import { Link } from "react-router-dom";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";

const NavLink = ({ style, link, name }) => {
  return (
    <Link
      to={link}
      style={{
        color: "var(--purple4)",
        padding: "1rem 2rem",
        textDecoration: "none",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        ...style,
      }}
    >
      {name}
    </Link>
  );
};

const NavLink2 = ({ style, link, name }) => {
  return <NavLink link={link} name={name} style={{ padding: "0rem" }} />;
};

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        width: "100vw",
        height: "0px",
        display: "flex",
        flexDirection: "column",
        zIndex: "10000",
      }}
    >
      <div
        style={{
          top: "0px",
          background: "var(--white)",
          boxShadow: "0px 10px 20px 0px rgba(97, 57, 208, 0.50)",
          width: "100vw",
          display: "flex",
          color: "var(--purple4)",
        }}
      >
        <NavLink
          link="/"
          name={
            <React.Fragment>
              <ExploreOutlinedIcon
                fontSize="large"
                style={{ marginRight: "1rem" }}
              />
              TALENT STOCK
            </React.Fragment>
          }
        />
        <NavLink link="/" name={"받은 오퍼"} style={{ marginLeft: "auto" }} />
        <div
          style={{
            padding: "1rem 2rem",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          <AccountCircleIcon fontSize="large" />
        </div>
      </div>
      {isModalOpen && (
        <div
          style={{
            color: "var(--purple4)",
            boxShadow: "0px 10px 12px 0px rgba(97, 57, 208, 0.50)",
            margin: "1rem 1rem 1rem auto",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            rowGap: "1.5rem",
            alignItems: "center",
          }}
          className="whiteContainer"
        >
          <div>
            안녕하세요, <b>OOO님</b>
          </div>
          <hr
            color="var(--purple5)"
            style={{ width: "40%", borderRadius: "10px", margin: "-0.2rem" }}
          />
          <NavLink2 link="/profile" name={"마이페이지"} />
          <NavLink2 link="/setting" name={"설정"} />
          <hr
            color="var(--purple5)"
            style={{
              width: "40%",
              borderRadius: "10px",
              margin: "-0.5rem",
            }}
          />
          <NavLink2 link="/logout" name={"로그아웃"} />
        </div>
      )}
    </div>
  );
}
