import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { createMedia } from "@artsy/fresnel";
import { InView } from "react-intersection-observer";
import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1368,
  },
});
const DesktopContainer = ({ children, activeSection }) => {
  const [activeItem, setActiveItem] = useState();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  useEffect(() => {
    setActiveItem(activeSection || "home");
  }, [activeSection]);
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
    <Media greaterThan="mobile">
      <InView>
        <Segment
          fixed="top"
          style={{
            padding: "0%",
            border: "none",
            backgroundColor: "transparent",
            position: "fixed",
            width: "100%",
          }}
        >
          <Menu
            style={{
              border: "none",
              backgroundColor: "#212121",
              margin: "0%",
            }}
          >
            <Container style={{ color: "white" }}>
              <Menu.Item
                as="a"
                style={{
                  color: "#f4c700",
                  fontFamily: "Edo",
                  fontSize: "2em",
                }}
              >
                Bug Zero
              </Menu.Item>
              {["Blog", "ZeroFeed", "Programs"].map((item) => (
                <Menu.Item key={item} as="a" style={{ color: "White" }}>
                  {item}
                </Menu.Item>
              ))}
              <Menu.Item position="right">
                <Button as="a" inverted color="yellow" basic>
                  Log in
                </Button>
                <Button
                  as="a"
                  inverted
                  color="yellow"
                  style={{ marginLeft: "0.5em" }}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <Segment
            style={{
              margin: "0%",
              backgroundColor: "#212121",
            }}
          >
            {!isScrolled ? (
              <Segment
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#212121",
                  color: "#f4c700 ",
                  fontFamily: " Edo",
                  fontSize: "5em",
                  margin: "0%",
                }}
              >
                Bug Zero
              </Segment>
            ) : null}

            <Menu
              style={{
                border: "none",
                display: "flex",
                justifyContent: "center",
                margin: "0%",
              }}
              inverted
              pointing
              secondary
            >
              {[
                { name: "home", label: "Home" },
                { name: "why-join-us", label: "Why Join Us?" },
                { name: "features", label: "Features" },
                { name: "our-scope", label: "Our Scope" },
                { name: "the-team", label: "The Team" },
              ].map((item) => (
                <Menu.Item
                  key={item.name}
                  name={item.name}
                  active={activeItem === item.name}
                  onClick={handleItemClick}
                  as="a"
                  href={`/#${item.name}`}
                >
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          </Segment>
        </Segment>
      </InView>

      {children}
    </Media>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

const MobileContainer = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const handleToggle = () => setSidebarOpened(!sidebarOpened);
  const handleSidebarHide = () => setSidebarOpened(false);

  return (
    <Media at="mobile">
      <Sidebar.Pushable
        style={{
          height: "100vh",
          width: "100%",
          position: "fixed",
          zIndex: 11,
        }}
      >
        <Sidebar
          as={Menu}
          animation="overlay"
          onHide={handleSidebarHide}
          vertical
          visible={sidebarOpened}
          style={{ backgroundColor: "#212121" }}
        >
          <Menu.Item onClick={handleSidebarHide}>
            <Icon name="x" style={{ color: "red" }} />
          </Menu.Item>
          {["Home", "Blog", "ZeroFeed", "Careers"].map((item) => (
            <Menu.Item key={item} as="a" style={{ color: "#F8F8F8" }}>
              {item}
            </Menu.Item>
          ))}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened} style={{ height: "100vh" }}>
          <Segment
            vertical
            style={{
              margin: 0,
              padding: 0,
              textAlign: "center",
              backgroundColor: "#212121",
            }}
          >
            <Menu pointing secondary size="large">
              <Menu.Item onClick={handleToggle}>
                <Icon name="sidebar" style={{ color: "white" }} />
              </Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted color="yellow" basic>
                  Log in
                </Button>
                <Button
                  as="a"
                  inverted
                  color="yellow"
                  style={{ marginLeft: "0.5em" }}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            </Menu>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const MainNavBar = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

MainNavBar.propTypes = {
  children: PropTypes.node,
};

export default MainNavBar;
