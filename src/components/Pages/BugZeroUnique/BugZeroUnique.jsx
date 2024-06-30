import React from "react";
import "./Unique.css";
import { GridColumn, Grid, Container, Header, Image } from "semantic-ui-react";

import clock from "../../../Assets/clock.png";
import equalizer from "../../../Assets/equalizer.png";
import iteration from "../../../Assets/iteration.png";
import guru from "../../../Assets/guru.png";
import wallet from "../../../Assets/wallet.png";
import range from "../../../Assets/range.png";

const Step = ({ img, title, desc }) => (
  <GridColumn>
    <div className="ui steps" style={{ display: "block", margin: "auto" }}>
      <div className="step" style={{ padding: "2em" }}>
        <Image src={img} alt="BigCo Inc. logo" size="tiny" />
        <div className="content">
          <div className="title" style={{ color: "white" }}>
            {title}
          </div>
          <div className="description" style={{ color: "white" }}>
            {desc}
          </div>
        </div>
      </div>
    </div>
  </GridColumn>
);

const BugZeroUnique = () => (
  <div style={{ padding: "6em 0em", border: "none:" }}>
    <Container text>
      <Header as="h3" style={{ fontSize: "2.5em", color: "#f4c700" }}>
        What Makes Bug Zero Unique?
      </Header>
      <br></br>
    </Container>
    <Grid container doubling columns={3}>
      <Step img={clock} title="Fast" desc="Results" />
      <Step img={equalizer} title="Flexible" desc="Programs" />
      <Step img={iteration} title="Agile" desc="Teams" />
      <Step img={guru} title="Expert" desc="Hackers" />
      <Step img={wallet} title="Pay Per Bug" desc="(P.P.B)" />
      <Step img={range} title="Wide Range" desc="Discovery" />
    </Grid>
    <br />
    <br />
  </div>
);

export default BugZeroUnique;
