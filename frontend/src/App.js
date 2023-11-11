import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"

function App() {

  return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Login />
            }
          />
          <Route
            path="/register"
            element={
              <Register />
            }
          />

        </Routes>
      </Router>
  );
}

export default App;
