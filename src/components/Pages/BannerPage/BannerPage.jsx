import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
import style from "./BannerPage.module.css";
import { Button, Icon } from "semantic-ui-react";

const BannerPage = () => {
  // const navigate = useNavigate();
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
      <div className={style.section_container}>
        <div className={style.hero_section}>
          <div className={style.text_section}>
            <h2 className={style.text_title}>
              Crowdsource your security testing in a smart way with Bug Zero
            </h2>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
            >
              <Button size="huge" color="yellow" style={{ color: "Black" }}>
                Get Started
                <Icon name="right arrow" />
              </Button>
              <Button size="huge" color="yellow" inverted>
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div
          onClick={scrollToTop}
          className={`${style.scroll_up} ${goUp ? style.show_scroll : ""}`}
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
