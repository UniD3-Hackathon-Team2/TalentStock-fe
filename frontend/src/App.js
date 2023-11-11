import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
<<<<<<< Updated upstream:frontend/src/App.js
=======
import OfferStudent from "./pages/Offer/OfferStudent";
import OfferCompany from "./pages/Offer/OfferCompany";
>>>>>>> Stashed changes:frontend/src/App.jsx
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
          <Route path="/offer-company" element={<OfferCompany />} />
        </Routes>
      </Router>
    //</Layout>
  );
}

export default App;
