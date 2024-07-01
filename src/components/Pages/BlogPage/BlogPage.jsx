import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardHeader,
  CardMeta,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
  Button,
  Input,
} from "semantic-ui-react";
import styles from "./BlogPage.module.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogDetails = await axios.get(
          "http://localhost:3001/fetch-medium-feed"
        );
        setBlogs(blogDetails.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Segment className={styles.segment}>
      <Container text>
        <Header className={styles.header}>Explore Our Knowledge Base</Header>
        <br />
      </Container>
      <Grid container doubling columns={4}>
        {blogs.map((item, index) => (
          <Grid.Column key={index}>
            <Card className={styles.card}>
              <Image
                src={item.imgUrl}
                alt="image"
                className={styles["card-image"]}
              />

              <CardContent className={styles["card-content"]}>
                <CardHeader className={styles["card-header"]}>
                  {item.topicName}
                </CardHeader>
                <CardMeta className={styles["card-meta"]}>
                  {`Author ${item.creator}`}
                </CardMeta>
                <CardMeta className={styles["card-meta"]}>
                  {`Publish on ${item.publishDate}`}
                </CardMeta>

                <CardMeta style={{ marginTop: "5%" }}>
                  <a
                    href={item.guidLink}
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
              <Card.Description>
                Subscribe to our mailing list to keep updated with latest on
                cyber security
              </Card.Description>
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
            {/* <br /> <br /> */}
          </Card>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default BlogPage;
