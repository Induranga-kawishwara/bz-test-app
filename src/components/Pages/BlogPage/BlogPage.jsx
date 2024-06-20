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
    <Segment style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <Grid container doubling columns={4}>
        {test.map((item) => (
          // <Card>
          //   <Image src={item.image} wrapped ui={false} />
          //   <CardContent>
          //     <CardHeader>{item.title}</CardHeader>
          //     <CardMeta>{`Author ${item.author}`}</CardMeta>
          //     <CardMeta>{`Publish on ${item.date}`}</CardMeta>
          //   </CardContent>
          //   <CardContent extra>
          //     <a>
          //       <Icon name="user" />
          //       10 Friends
          //     </a>
          //   </CardContent>
          // </Card>

          <Grid.Column>
            {/* card */}
            <Card style={{ width: "100%", textAlign: "center" }}>
              <Image src={item.image} alt="Prof Kasun De Zoysa" />
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
