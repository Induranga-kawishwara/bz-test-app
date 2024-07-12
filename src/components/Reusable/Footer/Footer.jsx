import React from "react";
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
  Button,
} from "semantic-ui-react";

const Footer = () => (
  <Segment inverted vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">Contact Us</List.Item>
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
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Bug Zero
            </Header>
            <p>Securing Your Organization, One Cyberspace at a Time.</p>
            <Header as="h4" inverted>
              Email:
            </Header>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=BugzeroTest@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              BugzeroTest@gmail.com
            </a>
          </Grid.Column>
          <Grid.Column
            width={3}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4px",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Button
              circular
              color="facebook"
              icon="facebook"
              href="https://www.facebook.com/bugzero.io/"
              target="_blank"
            />
            <Button
              circular
              color="twitter"
              icon="twitter"
              href="https://x.com/BugZero_io"
              target="_blank"
            />
            <Button
              circular
              color="linkedin"
              icon="linkedin"
              href="https://www.linkedin.com/company/bug-zero-io/"
              target="_blank"
            />
            <Button
              circular
              color="youtube"
              icon="youtube"
              href="https://www.youtube.com/@bugzero"
              target="_blank"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
