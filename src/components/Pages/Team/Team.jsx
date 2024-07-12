import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";
import "./teamStyle.css";

const teamData = [
  {
    name: "Prof. Kasun De Zoysa",
    image: require("../../../Assets/team/kasun.jpg"),
    profileLink: "https://scholar.google.com/citations?user=fXFgCdsAAAAJ&hl=en",
    icon: "graduation",
  },
  {
    name: "Dr. Primal Wijesekera",
    image: require("../../../Assets/team/primal.jpg"),
    profileLink: "https://www.linkedin.com/in/primalwijesekera/",
    icon: "linkedin",
  },
  {
    name: "Kenneth Thilakarathna",
    image: require("../../../Assets/team/kenneth.jpg"),
    profileLink: "https://www.linkedin.com/in/kenneth-thilakarathna-51aa0a5a/",
    icon: "linkedin",
  },
  {
    name: "Charitha Elvitigala",
    image: require("../../../Assets/team/charitha.png"),
    profileLink: "https://www.linkedin.com/in/charitha-elvitigala-42a5081a/",
    icon: "linkedin",
  },
  {
    name: "Nipuna Weerasekara",
    image: require("../../../Assets/team/nipuna.jpg"),
    profileLink: "https://niweera.gq/",
    icon: "globe",
  },
];

const ImprovedCardHeader = ({ member }) => {
  const { name } = member;
  const nameParts = name.split(" ");

  const firstName = nameParts.slice(0, -1).join(" ");

  return (
    <Card.Header>
      {firstName}
      <br />
      {nameParts[nameParts.length - 1]}
    </Card.Header>
  );
};

const Team = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Segment
      style={{
        padding: "6em 0em",
        border: "none",
        backgroundColor: "transparent",
      }}
      id="grey"
    >
      <Container text>
        <Header style={{ fontSize: "2.5em", color: "#f4c700" }}>
          The Bug Zero Team
        </Header>
        <br />
      </Container>
      <Grid
        container
        doubling={screenWidth >= 530}
        columns={screenWidth <= 530 ? "equal" : 5}
        stackable={screenWidth <= 530}
        centered
        className="bzTeam"
        style={{ textAlign: "center" }}
      >
        {teamData.map((member, index) => (
          <Grid.Column key={index} style={{ maxWidth: 300 }}>
            <Card centered>
              <Image src={member.image} alt={member.name} />
              <Card.Content>
                <ImprovedCardHeader member={member} />
              </Card.Content>
              <Card.Content extra>
                <a
                  href={member.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={member.icon} />
                  Profile
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </Segment>
  );
};

export default Team;
