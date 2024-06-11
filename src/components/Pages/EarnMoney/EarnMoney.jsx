import {
  Card,
  Container,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";

import imgmoney from "../../../Assets/money.png";
import imgbudget from "../../../Assets/budget.png";
import imgeyescan from "../../../Assets/eye-scanner.png";
import imgnetwork from "../../../Assets/networking.png";

const EarnMoney = () => {
  return (
    <Segment style={{ padding: "6em 0em", border: "none" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2.5em" }}>
          Earn Money By Doing What You Love!
        </Header>
        <p className="mb-4" style={{ fontSize: "1.33em" }}>
          For individuals, Bug Zero provides
        </p>
        <br></br>
      </Container>
      <Grid columns="equal" stackable>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column textAlign="center" className="clipArt">
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
        <Grid.Column className="clipArt">
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image src={imgbudget} alt="BigCo Inc. logo" size="tiny" />
              <h3>Complete Anonymity for Anyone Who Asks For Privacy</h3>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className="clipArt">
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
        <Grid.Column className="clipArt">
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
  );
};

export default EarnMoney;
