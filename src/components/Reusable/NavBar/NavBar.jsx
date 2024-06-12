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
          <Menu
            fixed={"top"}
            style={{ border: "none", backgroundColor: "black" }}
          >
            <Container style={{ color: "white" }}>
              <Menu.Item
                as="a"
                style={{
                  color: "#f4c700",
                  fontFamily: "Edo",
                  fontSize: "1.3em",
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
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Blog</Menu.Item>
            <Menu.Item as="a">Zerofeed</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment inverted textAlign="center" vertical>
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted>
                      Log in
                    </Button>
                    <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
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
