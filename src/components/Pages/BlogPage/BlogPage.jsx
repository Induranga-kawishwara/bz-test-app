import React from "react";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from "semantic-ui-react";
import test from "../../../Assets/logo/bhasha.png";

const CardExampleImageCard = () => (
  <Card>
    <Image src={test} wrapped ui={false} />
    <CardContent>
      <CardHeader>Daniel</CardHeader>
      <CardMeta>Joined in 2016</CardMeta>
      <CardDescription>
        Daniel is a comedian living in Nashville.
      </CardDescription>
    </CardContent>
    <CardContent extra>
      <a>
        <Icon name="user" />
        10 Friends
      </a>
    </CardContent>
  </Card>
);

export default CardExampleImageCard;
