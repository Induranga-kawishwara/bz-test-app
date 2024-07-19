import React from "react";

import "./NotFoundPAge.css";

const NotFoundPage = () => {
  return (
    <div className="test">
      <div id="particles" className="particles"></div>
      <main>
        <section>
          <h1>Page Not Found!</h1>
          <div>
            <span>4</span>
            <span class="circle">0</span>
            <span>4</span>
          </div>
          <p>
            We are unable to find the page
            <br />
            you're looking for.
          </p>
          <div>
            <button>Back to Home Page</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NotFoundPage;
