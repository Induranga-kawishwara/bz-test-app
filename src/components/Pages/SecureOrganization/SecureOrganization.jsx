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

const cardData = [
  {
    img: imgmoney,
    text: "Security testing for no upfront capital investment",
  },
  {
    img: imgbudget,
    text: "Security testing for no staffing or fixed budget constraints",
  },
  {
    img: imgnetwork,
    text: "A diverse set of eyes on your system with no recruitment",
  },
  {
    img: imgeyescan,
    text: "Increased visibility and transparency for your system",
  },
];

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
        <br />
      </Container>
      <Container>
        <Grid container doubling columns={4}>
          {cardData.map((card, index) => (
            <Grid.Column key={index} textAlign="left" className="clipArt">
              <Card
                style={{
                  boxShadow: "none",
                  width: "100%",
                  textAlign: "left",
                  backgroundColor: "#212121",
                }}
              >
                <Card.Content>
                  <Image src={card.img} alt="BigCo Inc. logo" size="tiny" />
                  <h3 style={{ color: "white" }}>{card.text}</h3>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid>
      </Container>

      <Container style={{ marginTop: "2rem", padding: "2rem" }}>
        <button
          className="big ui yellow button"
          style={{ color: "black", fontSize: "20px", borderRadius: "25px" }}
          size="huge"
        >
          Register as an organization
        </button>
      </Container>
    </Segment>
  );
};

export default SecureOrganization;
