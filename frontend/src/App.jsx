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

export const context = createContext({});

function App() {
  const [userState, SetUserState] = useState("logout");
  const [userId, SetUserId] = useState("");

  return (
    <context.Provider value={{ userState, SetUserState, userId, SetUserId }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<Main />} />
          <Route path="/offer-student" element={<OfferStudent />} />
          <Route path="/offer-company" element={<OfferCompany />} />
        </Routes>
      </Router>
    </context.Provider>
  );
}

export default App;
