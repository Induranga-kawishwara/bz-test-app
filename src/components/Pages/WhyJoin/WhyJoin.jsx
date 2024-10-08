import { Container, Embed, Header, Segment } from "semantic-ui-react";

const WhyJoin = () => {
  return (
    <Segment style={{ padding: "6em 0em", border: "none" }} vertical>
      <Container text>
        <Header as="h2" style={{ fontSize: "2.5em", color: "#f4c700" }}>
          Why Join <span>Bug Zero</span>
        </Header>
        <p style={{ fontSize: "1.33em", color: "white" }}>
          Check Your Security Vulnerabilities For FREE! <br />
          The crowdsource approach of Bug Zero will get a diverse set of eyes
          for your system with zero recruitment, logistical, or down payment
          overhead.
        </p>
        <Embed
          id="-s9dfdlQnSo"
          placeholder="https://i.imgur.com/McYF2j8.png"
          source="youtube"
        />
      </Container>
    </Segment>
  );
};

export default WhyJoin;
