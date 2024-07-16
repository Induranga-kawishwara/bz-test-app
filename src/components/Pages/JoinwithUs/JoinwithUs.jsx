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
    <div style={{ transform: "translateY(120px)" }}>
      <h1>Welcome to Bug Zero!</h1>
      <h2 style={{ color: "gray" }}>Let's get started</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          position: "relative",
        }}
      >
        <Card
          onClick={() => handleCardClick("")}
          style={{ marginBottom: "0", cursor: "pointer" }}
        >
          <img
            src={Hacker}
            style={{ height: "240px" }}
            alt="Join as a Hacker"
          />
          <CardContent>
            <CardHeader>Join as a Hacker</CardHeader>
            <CardMeta>Put your tech skills to good use.</CardMeta>
          </CardContent>
        </Card>

        <Divider vertical>Or</Divider>

        <Card onClick={() => handleCardClick("")} style={{ cursor: "pointer" }}>
          <img
            src={Organization}
            style={{ height: "240px" }}
            alt="Create a Program"
          />
          <CardContent>
            <CardHeader>Create a Program</CardHeader>
            <CardMeta>Make your organisation safe</CardMeta>
          </CardContent>
        </Card>
      </div>
      <div style={{ marginBottom: "145px", marginTop: "20px" }}>
        Already have an account? <a href="/signin">Sign In</a>
      </div>
    </div>
  );
};
export default JoinwithUs;
