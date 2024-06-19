import React from "react";
import { GridColumn, Grid, Container, Header, Image } from "semantic-ui-react";

import clock from "../../../Assets/clock.png";
import equalizer from "../../../Assets/equalizer.png";
import iteration from "../../../Assets/iteration.png";
import guru from "../../../Assets/guru.png";

const Step = ({ img, title, desc }) => (
  <GridColumn>
    <div class="ui steps" style={{ display: "block", margin: "auto" }}>
      <div class="step" style={{ padding: "2em 1em", flexDirection: "column" }}>
        <Image src={img} alt="BigCo Inc. logo" size="tiny" />
        <div class="content">
          <div class="title" style={{ margin: "5px 0 0 0" }}>
            {title}
          </div>
          <div class="description" style={{ margin: "0" }}>
            {desc}
          </div>
        </div>
      </div>
    </div>
  </GridColumn>
);

const EndtoEndSupport = () => (
  <>
    <Container text>
      <Header as="h3" style={{ fontSize: "2.5em" }}>
        Providing end to end support to every bug bounty program
      </Header>
      <br></br>
    </Container>
    <Grid container stackable columns={4}>
      <Step img={clock} title="Fast..." desc="Result" />
      <Step img={equalizer} title="Flexible" desc="Programs" />
      <Step img={iteration} title="Agile" desc="Teams" />
      <Step img={guru} title="Expert" desc="Hackers" />
    </Grid>
    <br />
    <br />
  </>
);
export default EndtoEndSupport;
