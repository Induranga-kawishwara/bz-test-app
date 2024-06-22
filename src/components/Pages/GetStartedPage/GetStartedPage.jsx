import {
  Grid,
  Header,
  Container,
  Segment,
  Button,
  Icon,
} from "semantic-ui-react";

const GetStartedPage = () => {
  return (
    <Segment style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={7}>
              <Header as="h3" style={{ fontSize: "2.5em" }}>
                Get Started With Bug Zero
              </Header>
              <br />
            </Grid.Column>
            <Grid.Column width={7}>
              <Button size="huge" color="yellow" style={{ color: "Black" }}>
                <Icon name="right arrow" />
                Join with us
              </Button>
              <Button size="huge" color="yellow" inverted>
                Contact Us
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default GetStartedPage;
