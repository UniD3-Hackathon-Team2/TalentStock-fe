import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Layout from "./components/layout/Layout";
import OfferStudent from "./pages/Offer/OfferStudent"
function App() {
  return (
    //<Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/offer-student" element={<OfferStudent />} />
        </Routes>
      </Router>
    //</Layout>
  );
}

export default App;
