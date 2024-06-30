import {
  Card,
  Container,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";

import imgknowledge from "../../../Assets/knowledge.png";
import imganonymous from "../../../Assets/anonymous.png";
import imgsuitcase from "../../../Assets/suitcase.png";
import imgswords from "../../../Assets/swords.png";

const EarnMoney = () => {
  return (
    <Segment style={{ padding: "6em 0em", border: "none" }} vertical>
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
                backgroundColor: "#212121",
              }}
            >
              <Card.Content>
                <Image src={imgknowledge} alt="BigCo Inc. logo" size="tiny" />
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
                backgroundColor: "#212121",
              }}
            >
              <Card.Content>
                <Image src={imganonymous} alt="BigCo Inc. logo" size="tiny" />
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
                backgroundColor: "#212121",
              }}
            >
              <Card.Content>
                <Image src={imgsuitcase} alt="BigCo Inc. logo" size="tiny" />
                <h3 style={{ color: "white" }}>
                  Increased Visibility in the Makret which could lead to
                  lucrative job opportunites
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
                backgroundColor: "#212121",
              }}
            >
              <Card.Content>
                <Image src={imgswords} alt="BigCo Inc. logo" size="tiny" />
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
              className="big ui yellow button"
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
