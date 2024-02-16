import React from "react";
import { Navigate,Routes,Route } from "react-router-dom";
import { MarvelPages } from "../heroes";
import { DcPage } from "../heroes";
import { Login } from "../auth";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Navbar />    
      <Routes>
        <Route path="marvel" element={<MarvelPages />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
