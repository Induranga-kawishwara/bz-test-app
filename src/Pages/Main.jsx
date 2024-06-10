import BugBountyStats from "./BugBountyStats/BugBountyStats";
import EarnMoney from "./EarnMoney/EarnMoney";
import Partners from "./Partners/Partners";
import HomePage from "./BannerPage/BannerPage";
import SecureOrganization from "./SecureOrganization/SecureOrganization";
import Team from "./Team/Team";
import WhyJoin from "./WhyJoin/WhyJoin";
import React, { useEffect } from "react";

import "./style.css";

const Main = () => {
  useEffect(() => {
    const handleScrollToSection = () => {
      const path = window.location.hash.substring(1);
      const targetSection = document.getElementById(path);
      if (targetSection) {
        setTimeout(() => {
          const sectionOffset = 100;
          const offsetTop = targetSection.offsetTop - sectionOffset;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }, 10);
      }
    };

    handleScrollToSection(); // Scroll to section on initial load

    window.addEventListener("hashchange", handleScrollToSection);

    return () => {
      window.removeEventListener("hashchange", handleScrollToSection);
    };
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default Main;
