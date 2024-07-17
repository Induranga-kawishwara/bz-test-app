import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

const SignIn = () => (
  <Grid
    textAlign="center"
    style={{ height: "100vh", marginTop: "0%" }}
    verticalAlign="middle"
  >
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="#f4c700" textAlign="center">
        Bug Zero
      </Header>
      <Form size="large">
        <Segment stacked>
          <h3>Sign In</h3>
          <h5 style={{ textAlign: "left" }}>Email Address</h5>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <h5 style={{ textAlign: "left" }}>Password</h5>
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <a href="#">Forget Password ?</a>
          <Button
            className="big ui yellow button"
            style={{
              color: "black",
              fontSize: "15px",
              borderRadius: "25px",
              width: "325px",
              margin: "3% 2% 3% 0%",
            }}
          >
            Sign In
          </Button>
          <br /> New to Bug Zero? <a href="#">Create an account</a>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default SignIn;
