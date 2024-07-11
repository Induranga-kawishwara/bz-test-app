import { Card, Container, Grid, Header, Segment } from "semantic-ui-react";

const statsData = [
  {
    header: "1M+ LKR",
    description: "Bounties Granted",
  },
  {
    header: "75K LKR",
    description: "Maximum Bounty",
  },
  {
    header: "25K LKR",
    description: "Average Bounty",
  },
  {
    header: "750+",
    description: "Bug Hunters",
  },
];

const BugBountyStats = () => {
  return (
    <Segment vertical style={{ padding: "6em 0em", border: "none" }} id="grey">
      <Container text style={{ marginBottom: "3em" }}>
        <Header as="h3" style={{ fontSize: "2.5em" }}>
          Our Bug Bounty Stats
        </Header>
      </Container>
      <Container>
        <Grid
          container
          columns={4}
          doubling
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          {statsData.map((stat, index) => (
            <Grid.Column key={index}>
              <Card style={{ width: "100%" }} className="stats-card">
                <Card.Content>
                  <Card.Header>{stat.header}</Card.Header>
                  <Card.Description>{stat.description}</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </Segment>
  );
};

export default BugBountyStats;
