import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import BugBountyStats from "../BugBountyStats/BugBountyStats";
import EndtoEndSupport from "../EndtoEndSupport/EndtoEndSupport";
import Partners from "../Partners/Partners";
import HomePage from "../BannerPage/BannerPage";
import SecureOrganization from "../SecureOrganization/SecureOrganization";
import Team from "../Team/Team";
import WhyJoin from "../WhyJoin/WhyJoin";
import EarnMoney from "../EarnMoney/EarnMoney";
import BugZeroUnique from "../BugZeroUnique/BugZeroUnique";
import BlogPage from "../BlogPage/BlogPage";
import GetStartedPage from "../GetStartedPage/GetStartedPage";
import style from "./Main.module.css";

const Main = () => {
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
    };

    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div>
      <section id="home">
        <HomePage />
      </section>

      <section id="Partners" className={style.darkSection}>
        <Partners />
      </section>

      <section id="why-join-us" className={style.darkSection}>
        <WhyJoin />
      </section>

      <section id="SecureOrganization" className={style.darkSection}>
        <SecureOrganization />
      </section>

      <section id="BugBountyStats">
        <BugBountyStats />
      </section>

      <section id="EarnMoney" className={style.darkSection}>
        <EarnMoney />
      </section>

      <section id="EndtoEndSupport" className={style.darkSection}>
        <EndtoEndSupport />
      </section>

      <section id="bugzerounique" className={style.darkSection}>
        <BugZeroUnique />
      </section>

      {/* <section id="the-team" className={style.darkSection}>
        <Team />
      </section> */}

      <section id="blog-page" className={style.darkSection}>
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
