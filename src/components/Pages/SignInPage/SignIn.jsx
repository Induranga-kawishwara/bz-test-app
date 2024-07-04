import React from "react";
import "./SignIn.css";

const SignIn = () => (
  <div
    className="ui middle aligned center aligned grid"
    style={{ width: "30%", margin: "20px auto " }}
  >
    <div className="column">
      <form
        action="https://s.codepen.io/voltron2112/debug/PqrEPM?"
        method="get"
        className="ui large form"
      >
        <div
          className="ui stacked secondary  segment"
          style={{ backgroundColor: "transparent", padding: "30px 15px " }}
        >
          <h2 className="ui image header">
            <div className="content">Log-in to your account</div>
          </h2>
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input type="text" name="email" placeholder="E-mail address" />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
          <a href="#">Forget Password ?</a>
          <div
            className="ui fluid large teal submit button"
            style={{ marginTop: "10px", backgroundColor: "#f4c700" }}
          >
            Login
          </div>
        </div>
      </form>

      <div className="ui message" style={{ backgroundColor: "transparent" }}>
        New to us? <a href="#">Register</a>
      </div>
    </div>
  </div>
);
export default SignIn;
