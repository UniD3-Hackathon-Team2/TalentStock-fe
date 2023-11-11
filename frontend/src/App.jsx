import React, { useState, useEffect, createContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import OfferCompany from "./pages/Offer/OfferCompany";
import OfferStudent from "./pages/Offer/OfferStudent";

import Layout from "./components/layout/Layout";
import Main from "./pages/Main/Main";
import ProfileStudent from "./pages/Profile/ProfileStudent";
import ProfileCompany from "./pages/Profile/ProfileCompany";

export const context = createContext({});

function App() {
  const [userState, SetUserState] = useState("logout");
  const [userId, SetUserId] = useState("");
  const [userType, setUserType] = useState("student");

  return (
    <context.Provider
      value={{
        userState,
        SetUserState,
        userId,
        SetUserId,
        userType,
        setUserType,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<Main />} />
          <Route
            path="/offer"
            element={
              userType === "student" ? <OfferStudent /> : <OfferCompany />
            }
          />
          <Route
            path="/profile/:id"
            element={
              userType === "student" ? <ProfileStudent /> : <ProfileCompany />
            }
          />
        </Routes>
      </Router>
    </context.Provider>
  );
}

export default App;
