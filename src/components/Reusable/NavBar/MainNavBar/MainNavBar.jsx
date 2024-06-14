import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
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
class DesktopContainer extends Component {
  state = {};

  render() {
    const { children } = this.props;

    return (
      <Media greaterThan="mobile">
        <InView>
          <Segment>
            <Menu
              fixed={"top"}
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
                <Menu.Item as="a" style={{ color: "White" }}>
                  Blog
                </Menu.Item>
                <Menu.Item as="a" style={{ color: "White" }}>
                  ZeroFeed
                </Menu.Item>
                <Menu.Item as="a" style={{ color: "White" }}>
                  Programs
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" className="ui inverted yellow basic button">
                    Log in
                  </Button>
                  <Button
                    as="a"
                    className="ui inverted yellow button"
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
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {
    sidebarOpened: false,
  };

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  handleCancel = () => this.setState({ sidebarOpened: false });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media at="mobile" style={{ border: "none" }}>
        <Sidebar.Pushable
          style={{
            height: "100vh",
            width: "100%",
            position: "fixed",
            zIndex: "1",
          }}
        >
          <Sidebar
            as={Menu}
            animation="overlay"
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
            style={{ backgroundColor: "#212121" }}
          >
            <Menu.Item onClick={this.handleCancel}>
              <Icon
                name="x"
                style={{
                  color: "red",
                }}
              />
            </Menu.Item>
            <Menu.Item as="a" style={{ color: "#F8F8F8" }}>
              Home
            </Menu.Item>
            <Menu.Item as="a" style={{ color: "#F8F8F8" }}>
              Blog
            </Menu.Item>
            <Menu.Item as="a" style={{ color: "#F8F8F8" }}>
              Zerofeed
            </Menu.Item>
            <Menu.Item as="a" style={{ color: "#F8F8F8" }}>
              Careers
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} style={{ height: "100vh" }}>
            <Segment
              vertical
              style={{
                margin: "0",
                padding: "0",
                textAlign: "center",
                backgroundColor: "#212121",
              }}
            >
              <Menu pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon
                    name="sidebar"
                    style={{
                      color: "white",
                    }}
                  />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" className="ui inverted yellow basic button">
                    Log in
                  </Button>
                  <Button
                    as="a"
                    style={{ marginLeft: "0.5em" }}
                    className="ui inverted yellow button"
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
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const NavBar = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

NavBar.propTypes = {
  children: PropTypes.node,
};

export default NavBar;
