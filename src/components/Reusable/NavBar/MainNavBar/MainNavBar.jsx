import React, { useState } from "react";
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

const DesktopContainer = ({ children }) => {
  return (
    <Media greaterThan="mobile">
      <InView>
        <Segment>
          <Menu
            fixed="top"
            style={{ border: "none", backgroundColor: "#212121" }}
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
