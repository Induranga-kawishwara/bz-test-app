import {
  Card,
  CardHeader,
  CardContent,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";

const Team = () => {
  return (
    <Segment style={{ padding: "6em 0em", border: "none" }} id="grey">
      <Container text>
        <Header style={{ fontSize: "2.5em" }}>The Bug Zero Team</Header>
        <br></br>
      </Container>
      <Grid container doubling columns={5}>
        {/* -----------------Kasun */}
        <Grid.Column>
          {/* card */}
          <Card style={{ width: "100%", textAlign: "center" }}>
            <Image
              src={require("../../../Assets/team/kasun.jpg")}
              alt="Prof Kasun De Zoysa"
            />
            <Card.Content>
              <CardHeader>
                Prof. Kasun
                <br />
                De Zoysa
              </CardHeader>
            </Card.Content>
            <CardContent extra>
              <a
                href="https://scholar.google.com/citations?user=fXFgCdsAAAAJ&hl=en"
                target="blank"
              >
                <Icon name="graduation" />
                Profile
              </a>
            </CardContent>
          </Card>
        </Grid.Column>
        {/* -----------------Primal */}
        <Grid.Column>
          <Card style={{ width: "100%", textAlign: "center" }}>
            <Image
              src={require("../../../Assets/team/primal.jpg")}
              alt="Dr Primal Wijesekara"
            />
            <Card.Content>
              <CardHeader>
                Dr. Primal <br />
                Wijesekera
              </CardHeader>
            </Card.Content>
            <CardContent extra>
              <a
                href="https://www.linkedin.com/in/primalwijesekera/"
                target="blank"
              >
                <Icon name="linkedin" />
                Profile
              </a>
            </CardContent>
          </Card>
        </Grid.Column>
        {/* -----------------Kenneth */}
        <Grid.Column>
          <Card style={{ width: "100%", textAlign: "center" }}>
            <Image
              src={require("../../../Assets/team/kenneth.jpg")}
              alt="Kenneth Thilakarathna"
            />
            <Card.Content>
              <CardHeader>
                Kenneth
                <br />
                Thilakarathna
              </CardHeader>
            </Card.Content>
            <CardContent extra>
              <a
                href="https://www.linkedin.com/in/kenneth-thilakarathna-51aa0a5a/"
                target="blank"
              >
                <Icon name="linkedin" />
                Profile
              </a>
            </CardContent>
          </Card>
        </Grid.Column>
        {/* -----------------Charitha */}
        <Grid.Column>
          <Card style={{ width: "100%", textAlign: "center" }}>
            <Image
              src={require("../../../Assets/team/charitha.png")}
              alt="Charitha Elvitigala"
            />
            <Card.Content>
              <CardHeader>
                Charitha
                <br />
                Elvitigala
              </CardHeader>
            </Card.Content>
            <CardContent extra>
              <a
                href="https://www.linkedin.com/in/charitha-elvitigala-42a5081a/"
                target="blank"
              >
                <Icon name="linkedin" />
                Profile
              </a>
            </CardContent>
          </Card>
        </Grid.Column>
        {/* -----------------Nipuna */}
        <Grid.Column>
          <Card>
            <Image
              src={require("../../../Assets/team/nipuna.jpg")}
              alt="Nipuna Weerasekara"
            />
            <Card.Content>
              <CardHeader>
                Nipuna
                <br />
                Weerasekara
              </CardHeader>
            </Card.Content>
            <CardContent extra>
              <a href="https://niweera.gq/" target="blank">
                <Icon name="globe" />
                Profile
              </a>
            </CardContent>
          </Card>
        </Grid.Column>
      </Grid>
      {/*-------------- Button --------------*/}
    </Segment>
  );
};

export default Team;
