import HomepageLayout from "./components/Pages/PageController/Main";
import Footer from "./components/Reusable/Footer/Footer";
import NavBar from "./components/Reusable/NavBar/MainNavBar";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/Pages/SignInPage/SignIn";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onPageScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      {/* <NavBar activeSection={activeSection} /> */}
      <Routes>
        <Route
          path="/bz-test-app"
          element={<HomepageLayout setActiveSection={setActiveSection} />}
        />
        <Route path="/bz-test-app/signin" element={<SignIn />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
