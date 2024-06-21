import React from "react";
import {
  CardMeta,
  CardHeader,
  Grid,
  CardContent,
  Card,
  Icon,
  Image,
  Segment,
  Container,
  Header,
} from "semantic-ui-react";
import testimge from "../../../Assets/logo/bhasha.png";

const CardExampleImageCard = () => {
  const test = [
    {
      image: testimge,
      title: "testing cat ",
      author: "induranga",
      date: "2024/05/15",
    },
    {
      image: testimge,
      title: "testing cat ",
      author: "induranga",
      date: "2024/05/15",
    },
    {
      image: testimge,
      title: "testing cat ",
      author: "induranga",
      date: "2024/05/15",
    },
    {
      image: testimge,
      title: "testing cat ",
      author: "induranga",
      date: "2024/05/15",
    },
  ];
  return (
    <Segment
      style={{ padding: "6em 0em", border: "none", backgroundColor: "#212121" }}
    >
      <Container text>
        <Header style={{ fontSize: "2.5em", color: "#F4C700" }}>
          Expore Our Knowledge Base
        </Header>
        <br></br>
      </Container>
      <Grid container doubling columns={4}>
        {test.map((item, index) => (
          <Grid.Column
            key={index}
            style={{
              alignItems: "center",
            }}
          >
            <Card
              style={{
                width: "100%",
                textAlign: "center",
                paddingTop: "10%",
                display: "flex",
                alignItems: "center",
                border: "3px , solid ,#F4C700",
                color: "white",
                // backgroundColor: "#F4C700",
                // opacity: "0.6",
              }}
            >
              <Segment
                style={{
                  width: "90%",
                  borderColor: "none",
                  padding: "none",
                }}
              >
                <Image src={item.image} alt="Prof Kasun De Zoysa" />
              </Segment>

              <CardContent>
                <CardHeader>{item.title}</CardHeader>
                <CardMeta>{`Author ${item.author}`}</CardMeta>
                <CardMeta>{`Publish on ${item.date}`}</CardMeta>
              </CardContent>
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
        ))}
      </Grid>
    </Segment>
  );
};

export default CardExampleImageCard;
