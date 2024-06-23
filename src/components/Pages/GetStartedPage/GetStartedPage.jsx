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
            <Grid.Column width={9}>
              <Header as="h3" style={{ fontSize: "2.5em" }}>
                Get Started With Bug Zero
              </Header>
              <p style={{ fontSize: "1.5em" }}>
                Hackers aren't waiting. So why would you? See how Nug Zero can
                help you.
              </p>
              <br />
            </Grid.Column>
            <Grid.Column width={7} style={{ paddingTop: "3%" }}>
              <Button
                size="huge"
                color="yellow"
                style={{
                  color: "Black",
                  margin: "0% 2% 5% 0%",
                  borderRadius: "25px",
                }}
              >
                <Icon name="right arrow" />
                <span style={{ marginLeft: "10px" }}>Join with us</span>
              </Button>
              <Button
                size="huge"
                color="yellow"
                style={{
                  borderRadius: "25px",
                }}
                inverted
              >
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
