import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { InView } from "react-intersection-observer";

import BugBountyStats from "../../Pages/BugBountyStats/BugBountyStats";
import EarnMoney from "../../Pages/EarnMoney/EarnMoney";
import Partners from "../../Pages/Partners/Partners";
import SecureOrganization from "../../Pages/SecureOrganization/SecureOrganization";
import Team from "../../Pages/Team/Team";
import WhyJoin from "../../Pages/WhyJoin/WhyJoin";

import "./style.css";

import {
  Button,
  Container,
  Header,
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

const HomepageHeading = ({ mobile }) => (
  <Container fluid>
    <Header
      as="h1"
      content="Crowdsource your security testing in a smart way with Bug Zero"
      inverted
      style={{
        fontSize: mobile ? "3em" : "4em",
        marginBottom: "2em",
        fontFamily: "Poppins Regular",
        marginTop: mobile ? "1.5em" : "2em",
        marginLeft: mobile ? "0.5rem" : "10rem",
        marginRight: mobile ? "0.5rem" : "10rem",
        animation: "zoomup 5s ease infinite",
      }}
    />
    <row>
      <Button size="huge" color="yellow" style={{ color: "Black" }}>
        Get Started
        <Icon name="right arrow" />
      </Button>
      <Button size="huge" color="yellow" inverted>
        Learn More
      </Button>
    </row>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

class DesktopContainer extends Component {
  state = {};

  toggleFixedMenu = (inView) => this.setState({ fixed: !inView });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <InView onChange={this.toggleFixedMenu}>
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: 750,
              padding: "1em 0em",
              backgroundImage:
                'url("https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
              style={{ border: "none" }}
            >
              <Container style={{ color: "White" }}>
                <Menu.Item
                  as="a"
                  active
                  style={{
                    fontFamily: "Edo",
                    fontSize: "1.3em",
                    color: "#f4c700",
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
                  <button
                    as="a"
                    inverted={!fixed}
                    class="ui inverted yellow basic button"
                  >
                    Log in
                  </button>
                  <button
                    as="a"
                    inverted={!fixed}
                    class="ui inverted yellow button"
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Sign Up
                  </button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
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
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
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
              <HomepageHeading mobile />
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

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <div>
      <section id="Partners">
        <Partners />
      </section>

      <section id="WhyJoin">
        <WhyJoin />
      </section>

      <section id="about">
        <SecureOrganization />
      </section>

      <section id="home">
        <BugBountyStats />
      </section>

      <section id="home">
        <EarnMoney />
      </section>

      <section id="about">
        <Team />
      </section>
    </div>
  </ResponsiveContainer>
);

export default HomepageLayout;
