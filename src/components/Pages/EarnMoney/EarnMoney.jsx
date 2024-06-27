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
    <Segment  style={{ padding: "6em 0em", border: "none" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2.5em", color: "#f4c700" }}>
          Earn Money By Doing What You Love!
        </Header>
        <p
          className="mb-4"
          style={{ fontSize: "1.33em", color: "white", marginBottom: "3em" }}
        >
          For individuals, Bug Zero provides
        </p>
      </Container>
      <Container>
      <Grid container doubling columns={4}>
          <Grid.Column textAlign="center" className="clipArt">
            {/* card */}
            <Card
              style={{
                boxShadow: "none",
                width: "100%",
                // textAlign: "center",
                backgroundColor: "#121212",
              }}
            >
              <Card.Content>
                <Image src={imgmoney} alt="BigCo Inc. logo" size="tiny" />
                <h3 style={{ color: "white" }}>
                  An opportunity to learn about security from scratch
                </h3>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="clipArt">
            <Card
              style={{
                boxShadow: "none",
                width: "100%",
                textAlign: "center",
                backgroundColor: "#121212",
              }}
            >
              <Card.Content>
                <Image src={imgbudget} alt="BigCo Inc. logo" size="tiny" />
                <h3 style={{ color: "white" }}>
                  Complete Anonymity for Anyone Who Asks For Privacy
                </h3>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="clipArt">
            <Card
              style={{
                boxShadow: "none",
                width: "100%",
                textAlign: "center",
                backgroundColor: "#121212",
              }}
            >
              <Card.Content>
                <Image src={imgnetwork} alt="BigCo Inc. logo" size="tiny" />
                <h3 style={{ color: "white" }}>
                  Increased Visibility in the Makret which could lead to lucrative
                  job opportunites
                </h3>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="clipArt">
            <Card
              style={{
                boxShadow: "none",
                width: "100%",
                textAlign: "center",
                backgroundColor: "#121212",
              }}
            >
              <Card.Content>
                <Image src={imgeyescan} alt="BigCo Inc. logo" size="tiny" />
                <h3 style={{ color: "white" }}>
                  Be a part of the ethical force against malicious actors
                </h3>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
      {/*-------------- Button --------------*/}
      <Grid style={{ marginTop: "2rem", padding: "2rem" }}>
        <Grid.Row>
          <Grid.Column>
            <button
              class="big ui yellow button"
              style={{ color: "Black", fontSize: "20px", borderRadius: "25px" }}
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
