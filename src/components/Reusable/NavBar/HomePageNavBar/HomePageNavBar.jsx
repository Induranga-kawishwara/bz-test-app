import React, { useState, useEffect } from "react";
import { Menu, Segment } from "semantic-ui-react";
import style from "./HomePageNavBar.module.css";

const HomePageNavBar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Segment
      inverted
      className={`${style.navbar_segment} ${
        isScrolled ? style.visible : style.hidden
      }`}
    >
      <Menu.Item as="a" className={style.navbar_logo}>
        Bug Zero
      </Menu.Item>
      <Menu inverted pointing secondary className={style.navbar_menu}>
        {["home", "Why Join Us?", "Features", "Our Scope", "The Team"].map(
          (item) => (
            <Menu.Item
              key={item}
              name={item}
              active={activeItem === item}
              onClick={handleItemClick}
            />
          )
        )}
      </Menu>
    </Segment>
  );
};

export default HomePageNavBar;
