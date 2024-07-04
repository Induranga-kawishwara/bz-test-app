import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/Pages/SignIn/SignIn";
import App from "./App";

const AppRoute = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
);
export default AppRoute;
