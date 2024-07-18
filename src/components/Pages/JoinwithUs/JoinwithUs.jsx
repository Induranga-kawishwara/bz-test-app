import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import Hacker from "../../../Assets/Hacker.jpg";
import Organization from "../../../Assets/Organization.jpg";
import "./joinwithus.css";
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
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ minHeight: "100vh", paddingTop: "20vh" }}>
      <h1>Welcome to Bug Zero!</h1>
      <h2 style={{ color: "gray" }}>Let's get started</h2>
      <div
        className="joinWithUs-outer"
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

        {width > 750 ? (
          <Divider vertical>or</Divider>
        ) : (
          <Divider horizontal>or</Divider>
        )}

        <Card
          onClick={() => handleCardClick("")}
          style={{ cursor: "pointer", marginTop: "0" }}
        >
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
