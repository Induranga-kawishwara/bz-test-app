import React from "react";
import { Segment, Container, Header } from "semantic-ui-react";
import { Stepper } from "react-form-stepper";

const EndtoEndSupport = () => {
  return (
    <Segment
      style={{
        padding: "6em 0em",
        border: "none",
        backgroundColor: "transparent",
      }}
    >
      <Container text>
        <Header as="h3" style={{ fontSize: "2.5em", color: "#f4c700" }}>
          Providing end to end support to every bug bounty program
        </Header>
        <br></br>
      </Container>

      <Stepper
        style={{ color: "white", fontSize: "1.5em" }}
        steps={[
          { label: "Define policy Scope and Rewards" },
          { label: "Define Right Tester" },
          { label: "Validate and prioratize vulnalabilities" },
          { label: "Verify and Intergrate" },
        ]}
        activeStep={4}
      />
    </Segment>
  );
};

export default EndtoEndSupport;
