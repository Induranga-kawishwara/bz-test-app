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
  Divider,
} from "semantic-ui-react";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1368,
  },
});

const menuItems = [
  { name: "home", label: "Home" },
  { name: "why-join-us", label: "Why Join Us?" },
  { name: "SecureOrganization", label: "Secure Organization" },
  { name: "EndtoEndSupport", label: "Support" },
  { name: "the-team", label: "The Team" },
];

const DesktopContainer = ({ children, activeSection = "home" }) => {
  const [activeItem, setActiveItem] = useState(activeSection);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  useEffect(() => {
    setActiveItem(activeSection);
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY !== 0);
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
            position: "fixed",
            width: "100%",
            backgroundColor: "transparent",
            zIndex: "10",
            boxShadow: "none",
          }}
        >
          <Menu
            style={{
              border: "none",
              backgroundColor: "#121212",
              margin: "0%",
              borderRadius: "0%",
            }}
          >
            <Container>
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
              {[
                { name: "blog-page", label: "Blog" },
                { name: "", label: "ZeroFeed" },
                { name: "", label: "Programs" },
              ].map((item, index) => (
                <Menu.Item
                  key={index}
                  as="a"
                  style={{ color: "White" }}
                  href={`/#${item.name}`}
                >
                  {item.label}
                </Menu.Item>
              ))}
              <Menu.Item position="right">
                <Button
                  as="a"
                  inverted
                  color="yellow"
                  style={{ borderRadius: "25px" }}
                  basic
                >
                  Log in
                </Button>
                <Button
                  as="a"
                  inverted
                  color="yellow"
                  style={{ marginLeft: "0.5em", borderRadius: "25px" }}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          {activeSection && (
            <Segment
              style={{
                margin: "0%",
                height: "0%",
                padding: "0%",
                border: "none",
                backgroundColor: isScrolled ? " #121212" : "transparent",
                borderRadius: "0%",
                boxShadow: "none",
              }}
            >
              {!isScrolled && (
                <Segment
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#f4c700 ",
                    fontFamily: " Edo",
                    fontSize: "5em",
                    margin: "0%",
                    backgroundColor: "transparent",
                    borderRadius: "0%",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  Bug Zero
                </Segment>
              )}

              <Menu
                style={{
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  margin: "0%",
                  paddingBottom: "1%",
                }}
                inverted
                pointing
                secondary
              >
                {menuItems.map((item, index) => (
                  <Menu.Item
                    key={index}
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
          )}
        </Segment>
      </InView>

      {children}
    </Media>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
  activeSection: PropTypes.string,
};

const MobileContainer = ({ children, activeSection }) => {
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
          style={{ backgroundColor: "#121212" }}
        >
          <Menu.Item
            onClick={handleSidebarHide}
            style={{ width: "fit-content", marginInlineStart: "auto" }}
          >
            <Icon name="x" style={{ color: "red" }} />
          </Menu.Item>

          {activeSection && (
            <>
              {menuItems.map((item, index) => (
                <Menu.Item
                  key={index}
                  name={item.name}
                  as="a"
                  style={{ color: "#F8F8F8" }}
                  href={`/#${item.name}`}
                  onClick={handleSidebarHide}
                >
                  {item.label}
                </Menu.Item>
              ))}
              <Divider style={{ backgroundColor: "#F8F8F8" }} />
            </>
          )}

          {[
            { name: "blog-page", label: "Blog" },
            { name: "", label: "ZeroFeed" },
            { name: "", label: "Programs" },
          ].map((item, index) => (
            <Menu.Item
              key={index}
              as="a"
              style={{ color: "White" }}
              href={`/#${item.name}`}
              onClick={handleSidebarHide}
            >
              {item.label}
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
              backgroundColor: "#121212",
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
  activeSection: PropTypes.string,
};

const MainNavBar = ({ children, activeSection }) => (
  <MediaContextProvider>
    <DesktopContainer activeSection={activeSection}>
      {children}
    </DesktopContainer>
    <MobileContainer activeSection={activeSection}>{children}</MobileContainer>
  </MediaContextProvider>
);

MainNavBar.propTypes = {
  children: PropTypes.node,
  activeSection: PropTypes.string,
};

export default MainNavBar;
