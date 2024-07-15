import React from "react";
import "semantic-ui-css/semantic.min.css";
import Hacker from "../../../Assets/Hacker.jpg";
import Organization from "../../../Assets/Organization.jpg";
import {
  Divider,
  CardMeta,
  CardHeader,
  CardContent,
  Card,
} from "semantic-ui-react";

const JoinwithUs = () => {
  const handleCardClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          position: "relative",
          height: "100vh",
        }}
      >
        <Card
          onClick={() => handleCardClick("")}
          style={{ marginTop: "150px", marginBottom: "0", cursor: "pointer" }}
        >
          <img src={Hacker} style={{ height: "225px" }} alt="Join as a Hacker" />
          <CardContent>
            <CardHeader>Join as a Hacker</CardHeader>
            <CardMeta>Put your tech skills to good use.</CardMeta>
          </CardContent>
        </Card>

        <Divider vertical>Or</Divider>

        <Card
          onClick={() => handleCardClick("")}
          style={{ marginTop: "150px", cursor: "pointer" }}
        >
          <img
            src={Organization}
            style={{ height: "225px" }}
            alt="Create a Program"
          />
          <CardContent>
            <CardHeader>Create a Program</CardHeader>
            <CardMeta>Make your organisation safe</CardMeta>
          </CardContent>
        </Card>
      </div>
      <div style={{ marginBottom: "300px" }}>
        Already have an account? <a href="/signin">Sign In</a>
      </div>
    </div>
  );
};

export default JoinwithUs;