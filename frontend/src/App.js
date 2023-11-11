import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
<<<<<<< HEAD

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Register />} />
      </Routes>
    </Router>
=======
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </Layout>
>>>>>>> e00a89e6b398014743b2ce9bbdd4bb6aa7bfe710
  );
}

export default App;
