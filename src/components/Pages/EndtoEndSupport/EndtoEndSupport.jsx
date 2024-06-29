import React from "react";
import { GridColumn, Grid, Container, Header, Image } from "semantic-ui-react";

import clock from "../../../Assets/numbers/number-one.png";
import equalizer from "../../../Assets/numbers/number-2.png";
import iteration from "../../../Assets/numbers/number-3.png";
import guru from "../../../Assets/numbers/number-four.png";
import "./endtoend.css";

const Step = ({ img, title }) => (
  <GridColumn>
    <div class="ui steps" style={{ display: "block", margin: "auto" }}>
      <div
        class="step step-card"
        style={{ padding: "2em 1em", justifyContent: "center" }}
      >
        <Image
          src={img}
          alt="BigCo Inc. logo"
          size="tiny"
          style={{ margin: "auto" }}
        />
        <div class="content" style={{ margin: "auto" }}>
          <div
            class="title title-margin"
            style={{
              textAlign: "center",
              lineHeight: "22px",
              fontSize: "1em",
            }}
          >
            {title}
          </div>
          {/* <div class="description" style={{ margin: "0", fontSize: "10px" }}>
            {desc}
          </div> */}
        </div>
      </div>
    </div>
  </GridColumn>
);

const EndtoEndSupport = () => (
  <>
    <Container text>
      <Header as="h3" style={{ fontSize: "2.5em", color: "#f4c700" }}>
        Providing end to end support to every bug bounty program
      </Header>
      <br></br>
    </Container>
    <Grid
      container
      stackable
      columns={4}
      style={{ backgroundcolor: " #f0f0f0" }}
    >
      <Step img={clock} title="Define policy Scope and Rewards" />
      <Step img={equalizer} title="Define Right Tester" />
      <Step img={iteration} title="Validate and prioratize vulnalabilities" />
      <Step img={guru} title="Verify and Intergrate" />
    </Grid>
    <br />
    <br />
  </>
);
export default EndtoEndSupport;
