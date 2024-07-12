import React from "react";
import { Button } from "semantic-ui-react";

const SignIn = () => (
  <div
    className="ui middle aligned center aligned grid"
    style={{ width: "30%", margin: "0 auto " }}
  >
    <div className="column">
      <form
        action="https://s.codepen.io/voltron2112/debug/PqrEPM?"
        method="get"
        className="ui large form"
      >
        <div
          className="ui stacked secondary  segment"
          style={{ backgroundColor: "transparent", padding: "30px 15px", marginTop:"85px" }}
        >
          <h2 className="ui image header">
            <div>
              <div className="content">Sign In</div>
            </div>
          </h2>
          <div className="field">
            <div className="ui left icon input" style={{flexDirection:"column"}}>
              <i className="user icon"></i> 
              <label for="email" style={{ textAlign:"left" }}>
                Email:
              </label>
              <input type="text" name="email" placeholder="E-mail address" />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input" style={{flexDirection:"column"}}>
               <i className="lock icon"></i> 
              <label for="password" style={{ textAlign:"left" }}>Password:</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
          <a href="#">Forget Password ?</a>
          <Button
             className="big ui yellow button"
             style={{ color: "black", fontSize: "15px", borderRadius: "25px",width:"325px", margin: "3% 2% 5% 0%"
               }}
          >
            Login
          </Button>
          New to Bug Zero? <a href="#">Create an account</a>
        </div>
      </form>
    </div>
  </div>
);
export default SignIn;
