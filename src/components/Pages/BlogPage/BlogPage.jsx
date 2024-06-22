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
  CardDescription,
  Button,
  Input,
} from "semantic-ui-react";
import testimge from "../../../Assets/logo/bhasha.png";

const BlogPage = () => {
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
  ];
  return (
    <Segment
      style={{ padding: "6em 0em", border: "none", backgroundColor: "#212121" }}
    >
      <Container text>
        <Header style={{ fontSize: "2.5em", color: "#F4C700" }}>
          Explore Our Knowledge Base
        </Header>
        <br></br>
      </Container>
      <Grid container doubling columns={4}>
        {test.map((item, index) => (
          <Grid.Column key={index}>
            <Card
              style={{
                height: "100%",
                width: "100%",
                textAlign: "start",
                paddingTop: "10%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "3px solid #F4C700",
                backgroundColor: "rgba(244, 199, 0, 0.2)",
              }}
            >
              <Segment
                style={{
                  width: "90%",
                  borderColor: "none",
                  padding: "0%",
                  flex: "1 0 auto",
                }}
              >
                <Image src={item.image} alt="Prof Kasun De Zoysa" />
              </Segment>

              <CardContent
                style={{
                  borderTop: "none",
                  width: "100%",
                  textAlign: "none",
                }}
              >
                <CardHeader
                  style={{
                    color: "white",
                  }}
                >
                  {item.title}
                </CardHeader>
                <CardMeta
                  style={{
                    color: "white",
                  }}
                >{`Author ${item.author}`}</CardMeta>
                <CardMeta
                  style={{
                    color: "white",
                  }}
                >{`Publish on ${item.date}`}</CardMeta>

                <CardMeta
                  style={{
                    marginTop: "5%",
                  }}
                >
                  <a
                    href="https://scholar.google.com/citations?user=fXFgCdsAAAAJ&hl=en"
                    target="blank"
                    style={{
                      color: "white",
                      textDecoration: "underline",
                    }}
                  >
                    Read more
                  </a>
                </CardMeta>
              </CardContent>
            </Card>
          </Grid.Column>
        ))}
        <Grid.Column>
          <Card
            style={{
              height: "100%",
              width: "100%",
              textAlign: "start",
              paddingTop: "15%",
              display: "flex",
              flexDirection: "column",
              border: "3px solid #F4C700",
              color: "black",
              backgroundColor: "rgba(244, 199, 0, 0.5)",
            }}
          >
            <Segment
              style={{
                background: "none",
                boxShadow: "none",
                border: "none",
                color: "white",
              }}
            >
              <CardDescription>
                Subscribe to our mailing list to keep updated with latest on
                cyber security
              </CardDescription>
              <br /> <br />
              <Input
                iconPosition="left"
                placeholder="Email"
                style={{ width: "100%", marginTop: "20%" }}
              >
                <Icon name="at" />
                <input />
              </Input>
              <Button
                color="yellow"
                style={{ color: "Black", width: "100%", marginTop: "10%" }}
              >
                Subscribe
              </Button>
            </Segment>
          </Card>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default BlogPage;
