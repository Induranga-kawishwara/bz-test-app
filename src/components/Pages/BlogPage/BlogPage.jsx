import React from "react";
import {
  CardMeta,
  CardHeader,
  CardDescription,
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
      {test.map((item) => (
        <Card>
          <Image src={item.image} wrapped ui={false} />
          <CardContent>
            <CardHeader>{item.title}</CardHeader>
            <CardMeta>{`Author ${item.author}`}</CardMeta>
            <CardMeta>{`Publish on ${item.date}`}</CardMeta>
          </CardContent>
          <CardContent extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </CardContent>
        </Card>
      ))}
    </Segment>
  );
};

export default CardExampleImageCard;
