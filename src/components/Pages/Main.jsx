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
// import Stepper from "./testing/testing";
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
          backgroundColor: "#212121",
        }}
      >
        <Partners />
      </section>

      <section
        id="why-join-us"
        style={{
          backgroundColor: "#212121",
        }}
      >
        <WhyJoin />
      </section>

      <section
        id="SecureOrganization"
        style={{
          backgroundColor: "#212121",
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
          backgroundColor: "#212121",
        }}
      >
        <EarnMoney />
      </section>

      <section
        id="EndtoEndSupport"
        style={{
          backgroundColor: "#212121",
        }}
      >
        <EndtoEndSupport />
      </section>

      <section
        id="bugzerounique"
        style={{
          backgroundColor: "#212121",
        }}
      >
        <BugZeroUnique />
      </section>

      <section
        id="the-team"
        style={{
          backgroundColor: "#212121",
        }}
      >
        <Team />
      </section>
      <section
        id="blog-page"
        style={{
          backgroundColor: "#212121",
        }}
      >
        <BlogPage />
      </section>

      <section id="getStarted-page">
        <GetStartedPage />
      </section>

      {/* <section id="steperpage">
        <Stepper />
      </section> */}

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
