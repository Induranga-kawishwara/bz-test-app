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
  Button
} from "semantic-ui-react";

const JoinwithUs = () => (
<div> <div 
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      position: "relative",
    
    }}
  >
    <Card style={{ marginTop: "150px", marginBottom: "0" }}>
      <img src={Hacker} style={{ height: "225px" }} />
      <CardContent>
        <CardHeader>Join as a Hacker</CardHeader>
        <CardMeta>Put your tech skills to good use.</CardMeta>
      </CardContent>
      <CardContent extra>
        <Button 
          className="big ui yellow button"
          style={{ color: "black", fontSize: "15px", borderRadius: "25px",width:"260px", margin: "3% 2% 5% 0%"
            }}
        >
          Sign Up
        </Button>
      </CardContent>
    </Card>

    <Divider vertical>Or</Divider>
    <Card style={{ marginTop: "150px" }}>
      <img src={Organization} style={{ height: "225px" }} />
      <CardContent>
        <CardHeader>Create a Program</CardHeader>
        <CardMeta>Make your organisation safe</CardMeta>
      </CardContent>
      <CardContent extra>
        <Button 
          className="big ui yellow button"
          style={{ color: "black", fontSize: "15px", borderRadius: "25px",width:"260px", margin: "3% 2% 5% 0%"
            }}
        >
          Sign Up
        </Button>
      </CardContent>
    </Card>

  </div>
  <div style={{marginTop:"50px"}}>
  Already have an account? <a>Sign In</a>
  </div></div>
);

export default JoinwithUs;
