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
import styles from "./BlogPage.module.css";

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
    <Segment className={styles.segment}>
      <Container text>
        <Header className={styles.header}>Explore Our Knowledge Base</Header>
        <br />
      </Container>
      <Grid container doubling columns={4}>
        {test.map((item, index) => (
          <Grid.Column key={index}>
            <Card className={styles.card}>
              <Segment className={styles["segment-content"]}>
                <Image src={item.image} alt="Prof Kasun De Zoysa" />
              </Segment>

              <CardContent className={styles["card-content"]}>
                <CardHeader className={styles["card-header"]}>
                  {item.title}
                </CardHeader>
                <CardMeta className={styles["card-meta"]}>
                  {`Author ${item.author}`}
                </CardMeta>
                <CardMeta className={styles["card-meta"]}>
                  {`Publish on ${item.date}`}
                </CardMeta>

                <CardMeta style={{ marginTop: "5%" }}>
                  <a
                    href="https://scholar.google.com/citations?user=fXFgCdsAAAAJ&hl=en"
                    target="blank"
                    className={styles["read-more"]}
                  >
                    Read more
                  </a>
                </CardMeta>
              </CardContent>
            </Card>
          </Grid.Column>
        ))}
        <Grid.Column>
          <Card className={styles["subscribe-card"]}>
            <Segment className={styles["subscribe-segment"]}>
              <CardDescription>
                Subscribe to our mailing list to keep updated with latest on
                cyber security
              </CardDescription>
              <br /> <br />
              <Input
                iconPosition="left"
                placeholder="Email"
                className={styles.input}
              >
                <Icon name="at" />
                <input />
              </Input>
              <Button color="yellow" className={styles.button}>
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
