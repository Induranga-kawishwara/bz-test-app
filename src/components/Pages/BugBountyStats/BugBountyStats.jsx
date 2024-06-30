import { Card, Container, Grid, Header, Segment } from "semantic-ui-react";

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
          <Grid.Column>
            <Card style={{ width: "100%" }} className="stats-card">
              <Card.Content>
                <Card.Header>1M+ LKR</Card.Header>
                <Card.Description>Bounties Granted</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card style={{ width: "100%" }} className="stats-card">
              <Card.Content>
                <Card.Header>75K LKR</Card.Header>
                <Card.Description>Maximum Bounty</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card style={{ width: "100%" }} className="stats-card">
              <Card.Content>
                <Card.Header>25K LKR</Card.Header>
                <Card.Description>Average Bounty</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card style={{ width: "100%" }} className="stats-card">
              <Card.Content>
                <Card.Header>750+</Card.Header>
                <Card.Description>Bug Hunters</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default BugBountyStats;
