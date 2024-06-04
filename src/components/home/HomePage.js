import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { InView } from "react-intersection-observer";

import "./style.css";

import {
  Button,
  Card,
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Container,
  Divider,
  Embed,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

// Import Clip arts
import imgmoney from "./Images/money.png";
import imgbudget from "./Images/budget.png";
import imganony from "./Images/anonymous.png";
import imgeyescan from "./Images/eye-scanner.png";
import imgknowledge from "./Images/knowledge.png";
import imgnetwork from "./Images/networking.png";
import imgsuitacase from "./Images/suitcase.png";
import imgswords from "./Images/swords.png";

// import 'semantic-ui-css/semantic.min.css';
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

// import time line
import TimelineObserver from "react-timeline-animation";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1368,
  },
});

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container fluid>
    <Header
      as="h1"
      content="Crowdsource your security testing in a smart way with Bug Zero"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        marginBottom: "2em",
        fontFamily: "Poppins Regular",
        marginTop: mobile ? "1.5em" : "2em",
        marginLeft: mobile ? "0em" : "2em",
        marginRight: mobile ? "0em" : "2em",
      }}
    />
    <row>
      <Button size="huge" color="yellow" style={{ color: "Black" }}>
        Get Started
        <Icon name="right arrow" />
      </Button>
      <Button size="huge" color="yellow" inverted>
        Learn More
        {/* <i class="info icon"></i> */}
      </Button>
    </row>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
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
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
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
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const images = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bug-zero.appspot.com/o/images%2Forganization%2Fbhasha%2FBhasha%20Logo%20512x512.png?alt=media&token=5fdba03a-bf71-4dd4-9ecf-e7432137d101",
    alt: "Image 1",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bug-zero.appspot.com/o/images%2Forganization%2Fhelakuru%2FHelakuru%20Logo-circle_profile_pic.png?alt=media&token=8a296db5-9eac-4272-b0d3-bd73811e3fbd",
    alt: "Image 2",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bug-zero.appspot.com/o/images%2Forganization%2Fpayhere%2Fphoto.png?alt=media&token=98ad34d3-2c0c-43a7-be1d-9f8a63bf3d36",
    alt: "Image 3",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bug-zero.appspot.com/o/images%2Forganization%2Fsri_lanka_cert%2Flogo.png?alt=media&token=3902c510-a820-4fdf-bc13-06f466d0bba9",
    alt: "Image 4",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/bug-zero.appspot.com/o/images%2Forganization%2Fworklenz%2Flarge-worklenz-icon-512-x-512-px%20copy.png?alt=media&token=5bf38ed2-a80d-4c08-b0a6-f2b1ea33abb9",
    alt: "Image 5",
  },
];

const HomepageLayout = () => (
  // const [counterOn, setCounterOn] = useState(false);

  <ResponsiveContainer>
    <Segment style={{ padding: "6em 0em", border: "none" }} vertical>
      {/* Logo bar */}
      <Header as="h3" style={{ fontSize: "2em", padding: "0 0 2em 0" }}>
        Protecting Sri Lanka's most valuable platforms
      </Header>
      {/* ---------------------------------------------Partners Logo Bar--------------------------------------------- */}
      <Grid columns="equal" stackable style={{ filter: "grayscale(100%)" }}>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column textAlign="center">
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image
                src={require("./Images/logo/bhasha.png")}
                alt="Bhasha Logo"
                size="tiny"
              />
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image
                src={require("./Images/logo/citadel.jpg")}
                alt="Citadel Logo"
                size="tiny"
              />
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image
                src={require("./Images/logo/helakuru.png")}
                alt="Helakuru Logo"
                size="tiny"
              />
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image
                src={require("./Images/logo/janashakthi.jpg")}
                alt="Janashakthi Logo"
                size="tiny"
              />
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image
                src={require("./Images/logo/payhere.png")}
                alt="Payhere Logo"
                size="tiny"
              />
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image
                src={require("./Images/logo/webt.jpg")}
                alt="Web Telescope Logo"
                size="tiny"
              />
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={1}></Grid.Column>
      </Grid>
    </Segment>
    {/* ---------------------------------------------Why join bug zero--------------------------------------------- */}
    <Segment style={{ padding: "6em 0em", border: "none" }} id="grey" vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Why Join Bug Zero
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Check Your Security Vulnerabilities For FREE! <br />
          The crowdsource approach of Bug Zero will get a diverse set of eyes
          for your system with zero recruitment, logistical, or down payment
          overhead.
        </p>
        <Embed
          id="-s9dfdlQnSo"
          placeholder="https://i.imgur.com/McYF2j8.png"
          source="youtube"
        />
      </Container>
    </Segment>
    {/* ---------------------------------------------Secure your organization--------------------------------------------- */}
    <Segment style={{ padding: "6em 0em", border: "none" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Secure your organization 24/7
        </Header>
        <p className="mb-4" style={{ fontSize: "1.33em" }}>
          For organizations, Bug Zero provides
        </p>
        <br></br>
      </Container>
      <Grid columns="equal" stackable>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column textAlign="center">
          {/* card */}
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image src={imgmoney} alt="BigCo Inc. logo" size="tiny" />
              <h3>Security testing for no upfront capital investment</h3>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image src={imgbudget} alt="BigCo Inc. logo" size="tiny" />
              <h3>
                Security testing for no staffing or fixed budget constraints
              </h3>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image src={imgnetwork} alt="BigCo Inc. logo" size="tiny" />
              <h3>A diverse set of eyes on your system with no recruitment </h3>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image src={imgeyescan} alt="BigCo Inc. logo" size="tiny" />
              <h3>Increased visibility and transparency for your system</h3>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={1}></Grid.Column>
      </Grid>
      {/*-------------- Button --------------*/}
      <Grid style={{ marginTop: "2rem", padding: "2rem" }}>
        <Grid.Row>
          <Grid.Column>
            <button
              class="big ui yellow button"
              style={{ color: "Black", fontSize: "20px" }}
              size="huge"
            >
              Register as an organization
            </button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    {/* ---------------------------------------------Bug Bounty Stats--------------------------------------------- */}
    <Segment vertical style={{ padding: "6em 0em", border: "none" }} id="grey">
      <Container text style={{ marginBottom: "3em" }}>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Our Bug Bounty Stats
        </Header>
      </Container>
      <Container>
        <Grid
          columns="equal"
          stackable
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Grid.Column>
            <Card style={{ width: "100%" }} className="stats-card">
              <Card.Content>
                <Card.Header>1M+ LKR</Card.Header>
                <Card.Description>Bounties Granted</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card style={{ width: "100%" }} className="stats-card">
              <Card.Content>
                <Card.Header>75K LKR</Card.Header>
                <Card.Description>Maximum Bounty</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card style={{ width: "100%" }} className="stats-card">
              <Card.Content>
                <Card.Header>25K LKR</Card.Header>
                <Card.Description>Average Bounty</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card style={{ width: "100%" }} className="stats-card">
              <Card.Content>
                <Card.Header>750 Plus</Card.Header>
                <Card.Description>Bug Hunters</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
    {/* ---------------------------------------Earn Money by doing what you love--------------------------------------------- */}
    <Segment style={{ padding: "6em 0em", border: "none" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Earn Money By Doing What You Love!
        </Header>
        <p className="mb-4" style={{ fontSize: "1.33em" }}>
          For individuals, Bug Zero provides
        </p>
        <br></br>
      </Container>
      <Grid columns="equal" stackable>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column textAlign="center">
          {/* card */}
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image src={imgmoney} alt="BigCo Inc. logo" size="tiny" />
              <h3>An opportunity to learn about security from scratch</h3>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image src={imgbudget} alt="BigCo Inc. logo" size="tiny" />
              <h3>Complete Anonymity for Anyone Who Asks For Privacy</h3>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image src={imgnetwork} alt="BigCo Inc. logo" size="tiny" />
              <h3>
                Increased Visibility in the Makret which could lead to lucrative
                job opportunites
              </h3>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image src={imgeyescan} alt="BigCo Inc. logo" size="tiny" />
              <h3>Be a part of the ethical force against malicious actors</h3>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={1}></Grid.Column>
      </Grid>
      {/*-------------- Button --------------*/}
      <Grid style={{ marginTop: "2rem", padding: "2rem" }}>
        <Grid.Row>
          <Grid.Column>
            <button
              class="big ui yellow button"
              style={{ color: "Black", fontSize: "20px" }}
              size="huge"
            >
              Register as an individual
            </button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    {/* ---------------------------------------The Bug Zero Team--------------------------------------------- */}
    <Segment style={{ padding: "6em 0em", border: "none" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          The Bug Zero Team
        </Header>
        <br></br>
      </Container>
      <Grid columns="equal" stackable>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column textAlign="center">
          {/* card */}
          <Card style={{ width: "100%", textAlign: "center" }}>
            <Image
              src={require("./Images/team/kasun.jpg")}
              alt="BigCo Inc. logo"
            />
            <Card.Content>
              <CardHeader>Dr. Kasun De Zoysa</CardHeader>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card style={{ width: "100%", textAlign: "center" }}>
            <Image
              src={require("./Images/team/primal.jpg")}
              alt="BigCo Inc. logo"
            />
            <Card.Content>
              <CardHeader>Dr. Primal Wijesekera</CardHeader>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card style={{ width: "100%", textAlign: "center" }}>
            <Image
              src={require("./Images/team/kenneth.jpg")}
              alt="BigCo Inc. logo"
            />
            <Card.Content>
              <CardHeader>Kenneth Thilakarathna</CardHeader>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card style={{ width: "100%", textAlign: "center" }}>
            <Image
              src={require("./Images/team/charitha.png")}
              alt="BigCo Inc. logo"
            />
            <Card.Content>
              <CardHeader>Charitha Elvitigala</CardHeader>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card style={{ width: "100%", textAlign: "center" }}>
            <Image
                src={require("./Images/team/nipuna.jpg")}
                alt="BigCo Inc. logo"
              />
            <Card.Content>
              <CardHeader>Nipuna Weerasekara</CardHeader>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={1}></Grid.Column>
      </Grid>
      {/*-------------- Button --------------*/}
    </Segment>

    {/* -----------------------------------------Providing end to end support--------------------------------------------- */}

    {/* <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We can give your company superpowers to do things that they never
              thought possible. Let us delight your customers and empower your
              needs... through pure data analytics.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes that's right, you thought it was the stuff of dreams, but even
              bananas can be bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="/images/wireframe/white-image.png"
            />
          </Grid.Column>
        </Grid.Row>
        
      </Grid> */}

    {/* <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image avatar src="/images/avatar/large/nan.jpg" />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> */}

    {/* <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Instead of focusing on content creation and hard work, we have learned
          how to master the art of doing nothing by providing massive amounts of
          whitespace and generic content that can seem massive, monolithic and
          worth your attention.
        </p>
        <Button as="a" size="large">
          Read More
        </Button>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Case Studies</a>
        </Divider>

        <Header as="h3" style={{ fontSize: "2em" }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur
          filler content, but it's really true. It took years of gene splicing
          and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as="a" size="large">
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment> */}

    {/* ------------------------------- Footer  -------------------------------*/}

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                {/* <List.Item as="a">Sitemap</List.Item> */}
                <List.Item as="a">Contact Us</List.Item>
                {/* <List.Item as="a">Religious Ceremonies</List.Item> */}
                <List.Item as="a">About Bug Zero</List.Item>
                <List.Item as="a">Privacy Policy</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Bug Bounty</List.Item>
                <List.Item as="a">Consulting</List.Item>
                <List.Item as="a">Blog</List.Item>
                {/* <List.Item as="a">Favorite X-Men</List.Item> */}
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Bug Zero
              </Header>
              <p>Securing Your Organization, One Cyberspace at a Time.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
