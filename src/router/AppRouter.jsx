import React from "react";
import { Navigate,Routes,Route } from "react-router-dom";
import { HeroesRoutes, MarvelPages } from "../heroes";
import { DcPage } from "../heroes";
import { Login } from "../auth";

export const AppRouter = () => {
  return (
    <>        
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<HeroesRoutes/>} />
      </Routes>
    </>
  );
};
