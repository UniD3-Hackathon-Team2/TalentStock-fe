import React, { useState, useEffect, createContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import OfferCompany from "./pages/Offer/OfferCompany";
import OfferStudent from "./pages/Offer/OfferStudent";
import Main from "./pages/Main/Main";
import ProfileStudent from "./pages/Profile/ProfileStudent";
import ProfileCompany from "./pages/Profile/ProfileCompany";
import ProfileEditStudent from "./pages/Profile/ProfileEditStudent";
import ProfileEditCompany from "./pages/Profile/ProfileEditCompany";
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
          <Route
            path="/offer/:id"
            element={
              userType === "student" ? <OfferStudent /> : <OfferCompany />
            }
          />
          <Route path="/profile-student/:id" element={<ProfileStudent />} />
          <Route path="/profile-company/:id" element={<ProfileCompany />} />
          <Route
            path="/profile-edit-student"
            element={<ProfileEditStudent />}
          />
          <Route
            path="/profile-edit-company"
            element={<ProfileEditCompany />}
          />
        </Routes>
      </Router>
    </context.Provider>
  );
}
export default App;
