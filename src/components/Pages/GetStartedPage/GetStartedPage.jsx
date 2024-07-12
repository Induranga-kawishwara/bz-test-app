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
                Hackers aren't waiting. So why would you? See how Bug Zero can
                help you.
              </p>
            </Grid.Column>
            <Grid.Column
              width={7}
              style={{ paddingTop: "3%", borderTop: "none" }}
            >
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
                <span style={{ marginLeft: "10px" }}>
                  {" "}
                  <a href={`${process.env.PUBLIC_URL}/joinwithus`}>
                    Join with us
                  </a>
                </span>
              </Button>
              <Button
                size="huge"
                color="yellow"
                style={{
                  borderRadius: "25px",
                  color: "#212121",
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
