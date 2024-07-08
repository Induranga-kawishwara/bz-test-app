import React, { useState, useEffect } from "react";
import {
  Segment,
  Container,
  Header,
  Grid,
  GridColumn,
} from "semantic-ui-react";
import { Stepper } from "react-form-stepper";
import "./EndtoEndSuppor.css";

const Step = ({ num, title }) => (
  <GridColumn>
    <div className="ui steps" style={{ display: "block", margin: "auto" }}>
      <div
        className="step step-card"
        style={{ padding: "2em 1em", justifyContent: "center" }}
      >
        <h1>{num}</h1>
        <div className="content" style={{ margin: "auto" }}>
          <div
            className="title title-margin"
            style={{ textAlign: "center", lineHeight: "22px", fontSize: "1em" }}
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  </GridColumn>
);

const EndtoEndSupport = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
  const steps = [
    "Define policy Scope and Rewards",
    "Define Right Tester",
    "Validate and prioratize vulnalabilities",
    "Verify and Intergrate",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <br />
      </Container>
      <Container>
        {isMobile ? (
          <Grid container stackable columns={4}>
            {steps.map((text, index) => (
              <Step key={index} num={index + 1} title={text} />
            ))}
          </Grid>
        ) : (
          <Stepper
            style={{ color: "white", fontSize: "1.5em" }}
            steps={steps.map((text) => ({ label: text }))}
          />
        )}
      </Container>
    </Segment>
  );
};

export default EndtoEndSupport;
