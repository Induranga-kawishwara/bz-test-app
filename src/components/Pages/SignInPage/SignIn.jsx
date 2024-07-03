import React from "react";
import "./SignIn.css";

const SignIn = () => (
  <div
    class="ui middle aligned center aligned grid"
    style={{ width: "30%", margin: "20px auto " }}
  >
    <div class="column">
      <form
        action="https://s.codepen.io/voltron2112/debug/PqrEPM?"
        method="get"
        class="ui large form"
      >
        <div
          class="ui stacked secondary  segment"
          style={{ backgroundColor: "transparent", padding: "30px 15px " }}
        >
          <h2 class="ui image header">
            <div class="content">Log-in to your account</div>
          </h2>
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="email" placeholder="E-mail address" />
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
          <a href="#">Forget Password ?</a>
          <div
            class="ui fluid large teal submit button"
            style={{ marginTop: "10px", backgroundColor: "#f4c700" }}
          >
            Login
          </div>
        </div>
      </form>

      <div class="ui message" style={{ backgroundColor: "transparent" }}>
        New to us? <a href="#">Register</a>
      </div>
    </div>
  </div>
);
export default SignIn;
