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

const SecureOrganization = () => {
  return (
    <Segment style={{ padding: "6em 0em", border: "none" }} vertical>
      <Container text>
        <Header style={{ fontSize: "2.5em", color: "#f4c700" }}>
          Secure your organization 24/7
        </Header>
        <p className="mb-4" style={{ fontSize: "1.33em", color: "white" }}>
          For organizations, Bug Zero provides
        </p>
        <br></br>
      </Container>
      <Container>
        <Grid container doubling columns={4}>
          <Grid.Column textAlign="center" className="clipArt">
            {/* card */}
            <Card
              style={{
                boxShadow: "none",
                width: "100%",
                textAlign: "center",
                backgroundColor: "#121212",
              }}
            >
              <Card.Content>
                <Image src={imgmoney} alt="BigCo Inc. logo" size="tiny" />
                <h3 style={{ color: "white" }}>
                  Security testing for no upfront capital investment
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
                  Security testing for no staffing or fixed budget constraints
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
                  A diverse set of eyes on your system with no recruitment{" "}
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
                  Increased visibility and transparency for your system
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
              Register as an organization
            </button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default SecureOrganization;
