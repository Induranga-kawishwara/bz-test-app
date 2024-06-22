import { Card, Grid, Header, Image, Segment } from "semantic-ui-react";

const Partners = () => {
  return (
    <Segment style={{ padding: "6em 0em", border: "none" }} vertical>
      {/* Logo bar */}
      <Header as="h3" style={{ fontSize: "2.5em" }}>
        Protecting Sri Lanka's Most Valuable Platforms
      </Header>
      <br />
      {/* ---------------------------------------------Partners Logo Bar--------------------------------------------- */}
      <Grid columns="equal" stackable>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column textAlign="center" className="logoColour">
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image
                src={require("../../../Assets/logo/bhasha.png")}
                alt="Bhasha Logo"
                size="tiny"
              />
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className="logoColour">
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image
                src={require("../../../Assets/logo/citadel.jpg")}
                alt="Citadel Logo"
                size="tiny"
              />
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className="logoColour">
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image
                src={require("../../../Assets/logo/helakuru.png")}
                alt="Helakuru Logo"
                size="tiny"
              />
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className="logoColour">
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image
                src={require("../../../Assets/logo/janashakthi.jpg")}
                alt="Janashakthi Logo"
                size="tiny"
              />
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className="logoColour">
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image
                src={require("../../../Assets/logo/payhere.png")}
                alt="Payhere Logo"
                size="tiny"
              />
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className="logoColour">
          <Card
            style={{ boxShadow: "none", width: "100%", textAlign: "center" }}
          >
            <Card.Content>
              <Image
                src={require("../../../Assets/logo/webt.jpg")}
                alt="Web Telescope Logo"
                size="tiny"
              />
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={1}></Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Partners;
