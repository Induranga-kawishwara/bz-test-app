import BugBountyStats from "./BugBountyStats/BugBountyStats";
import EarnMoney from "./EarnMoney/EarnMoney";
import Partners from "./Partners/Partners";
import HomePage from "./BannerPage/BannerPage";
import SecureOrganization from "./SecureOrganization/SecureOrganization";
import Team from "./Team/Team";
import WhyJoin from "./WhyJoin/WhyJoin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import style from "./Main.module.css";

import HomePageNavBar from "../Reusable/NavBar/HomePageNavBar/HomePageNavBar";

import "./style.css";

const Main = () => {
  const [goUp, setGoUp] = useState(false);
  const [fillBorder, setFillBorder] = useState(false);

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
    };

    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollToSection = () => {
      const path = window.location.hash.substring(1);
      const targetSection = document.getElementById(path);
      if (targetSection) {
        setFillBorder(true);
        setTimeout(() => setFillBorder(false), 1000); // reset after animation
        setTimeout(() => {
          const sectionOffset = 100;
          const offsetTop = targetSection.offsetTop - sectionOffset;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }, 10);
      }
    };

    handleScrollToSection();

    window.addEventListener("hashchange", handleScrollToSection);

    return () => {
      window.removeEventListener("hashchange", handleScrollToSection);
    };
  }, []);

  return (
    <div>
      {/* <HomePageNavBar /> */}
      <section id="HomePage">
        <HomePage />
      </section>

      <section id="Partners">
        <Partners />
      </section>

      <section id="WhyJoin">
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

      <section id="Team">
        <Team />
      </section>

      <div
        onClick={scrollToTop}
        className={`${style.scroll_up} ${goUp ? style.show_scroll : ""} ${
          fillBorder ? style.fill_border : ""
        }`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
};

export default Main;
