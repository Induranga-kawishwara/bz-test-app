import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import HomePageNavBar from "../Reusable/NavBar/HomePageNavBar/HomePageNavBar";
import BugBountyStats from "./BugBountyStats/BugBountyStats";
import EarnMoney from "./EarnMoney/EarnMoney";
import Partners from "./Partners/Partners";
import HomePage from "./BannerPage/BannerPage";
import SecureOrganization from "./SecureOrganization/SecureOrganization";
import Team from "./Team/Team";
import WhyJoin from "./WhyJoin/WhyJoin";
import style from "./Main.module.css";
import "./style.css";

const Main = () => {
  const [goUp, setGoUp] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const scrollToTop = () => {
    const scrollToTopAnimation = () => {
      const currentPosition = window.scrollY;
      if (currentPosition > 0) {
        window.scrollTo(0, currentPosition - currentPosition / 10);
        window.requestAnimationFrame(scrollToTopAnimation);
      }
    };
    window.requestAnimationFrame(scrollToTopAnimation);
  };

  useEffect(() => {
    const onPageScroll = () => {
      setGoUp(window.scrollY > 200);

      // Check which section is currently in view
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
    <div>
      <HomePageNavBar activeSection={activeSection} />
      <section id="home">
        <HomePage />
      </section>

      <section id="Partners">
        <Partners />
      </section>

      <section id="why-join-us">
        <WhyJoin />
      </section>

      <section id="SecureOrganization">
        <SecureOrganization />
      </section>

      <section id="BugBountyStats">
        <BugBountyStats />
      </section>

      <section id="EarnMoney">
        <EarnMoney />
      </section>

      <section id="the-team">
        <Team />
      </section>

      <div
        onClick={scrollToTop}
        className={`${style.scroll_up} ${goUp ? style.show_scroll : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
};

export default Main;
