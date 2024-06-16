import "./App.css";
import HomepageLayout from "./components/Pages/Main";
import Footer from "./components/Reusable/Footer/Footer";
import NavBar from "./components/Reusable/NavBar/MainNavBar/MainNavBar";
import React, { useState, useEffect } from "react";

function App() {
  const [goUp, setGoUp] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    const onPageScroll = () => {
      setGoUp(window.scrollY > 200);

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
    <div className="App">
      <NavBar activeSection={activeSection} />
      <HomepageLayout />
      <Footer />
    </div>
  );
}

export default App;
