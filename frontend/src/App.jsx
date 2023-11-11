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
  const [userId, SetUserId] = useState("");
  const [userType, setUserType] = useState("company");

  return (
    <context.Provider
      value={{
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
          <Route path="/offer-student" element={<OfferStudent />} />
          <Route path="/offer-company" element={<OfferCompany />} />
          <Route
            path="/profile"
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
