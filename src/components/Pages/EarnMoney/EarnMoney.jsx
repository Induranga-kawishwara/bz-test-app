import {
  Card,
  Container,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";

const cardData = [
  {
    img: require("../../../Assets/knowledge.png"),
    text: "An opportunity to learn about security from scratch",
  },
  {
    img: require("../../../Assets/anonymous.png"),
    text: "Complete Anonymity for Anyone Who Asks For Privacy",
  },
  {
    img: require("../../../Assets/suitcase.png"),
    text: "Increased Visibility in the Market which could lead to lucrative job opportunities",
  },
  {
    img: require("../../../Assets/swords.png"),
    text: "Be a part of the ethical force against malicious actors",
  },
];

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
          {cardData.map((card, index) => (
            <Grid.Column key={index} textAlign="center" className="clipArt">
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
          Register as an individual
        </button>
      </Container>
    </Segment>
  );
};

export default EarnMoney;
