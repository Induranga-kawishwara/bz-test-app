import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import BugBountyStats from "./BugBountyStats/BugBountyStats";
import EarnMoney from "./EarnMoney/EarnMoney";
import Partners from "./Partners/Partners";
import HomePage from "./BannerPage/BannerPage";
import SecureOrganization from "./SecureOrganization/SecureOrganization";
import Team from "./Team/Team";
import WhyJoin from "./WhyJoin/WhyJoin";
import BugZeroUnique from "../../Pages/BugZeroUnique/BugZeroUnique";
import style from "./Main.module.css";
import "./style.css";

const Main = ({ setActiveSection }) => {
  const [goUp, setGoUp] = useState(false);

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

      if (window.scrollY === 0) {
        setActiveSection("home");
        return;
      }

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
  }, [setActiveSection]);

  return (
    <div>
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

      <section id="bugzerounique">
        <BugZeroUnique />
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
