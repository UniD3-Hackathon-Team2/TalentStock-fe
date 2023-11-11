import React, { useState, useEffect, createContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Layout from "./components/layout/Layout";

export const context = createContext({});

function App() {
  const [userState, SetUserState] = useState("logout");

  return (
    <context.Provider value={{ userState, SetUserState }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </context.Provider>
  );
}

export default App;
