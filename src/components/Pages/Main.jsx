import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import BugBountyStats from "./BugBountyStats/BugBountyStats";
import EndtoEndSupport from "./EndtoEndSupport/EndtoEndSupport";
import Partners from "./Partners/Partners";
import HomePage from "./BannerPage/BannerPage";
import SecureOrganization from "./SecureOrganization/SecureOrganization";
import Team from "./Team/Team";
import WhyJoin from "./WhyJoin/WhyJoin";
import EarnMoney from "./EarnMoney/EarnMoney";
import BugZeroUnique from "./BugZeroUnique/BugZeroUnique";
import BlogPage from "./BlogPage/BlogPage";
import GetStartedPage from "./GetStartedPage/GetStartedPage";
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

      <section
        id="Partners"
        style={{
          backgroundColor: "#121212",
        }}
      >
        <Partners />
      </section>

      <section
        id="why-join-us"
        style={{
          backgroundColor: "#121212",
        }}
      >
        <WhyJoin />
      </section>

      <section
        id="SecureOrganization"
        style={{
          backgroundColor: "#121212",
        }}
      >
        <SecureOrganization />
      </section>

      <section id="BugBountyStats">
        <BugBountyStats />
      </section>

      <section
        id="EarnMoney"
        style={{
          backgroundColor: "#121212",
        }}
      >
        <EarnMoney />
      </section>

      <section
        id="EndtoEndSupport"
        style={{
          backgroundColor: "#121212",
        }}
      >
        <EndtoEndSupport />
      </section>

      <section
        id="bugzerounique"
        style={{
          backgroundColor: "#121212",
          padding: "6em 0em",
          border: "none:",
        }}
      >
        <BugZeroUnique />
      </section>

      <section
        id="the-team"
        style={{
          backgroundColor: "#121212",
          padding: "6em 0em",
          border: "none:",
        }}
      >
        <Team />
      </section>
      <section
        id="blog-page"
        style={{
          backgroundColor: "#121212",
        }}
      >
        <BlogPage />
      </section>

      <section id="getStarted-page">
        <GetStartedPage />
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
