import HomepageLayout from "./components/Pages/PageController/Main";
import Footer from "./components/Reusable/Footer/Footer";
import NavBar from "./components/Reusable/NavBar/MainNavBar";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/Pages/SignInPage/SignIn";
import JoinwithUs from "./components/Pages/JoinwithUs/JoinwithUs";
import NotFoundPAge from "./components/Pages/404Page/NotFoundPAge";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/bz-test-app" element={<HomepageLayout />} />
        <Route path="/bz-test-app/signin" element={<SignIn />} />
        <Route path="/bz-test-app/joinwithus" element={<JoinwithUs />} />
        <Route path="*" element={<NotFoundPAge />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
