import React from "react";
import Main from "./Main";

const HomepageLayout = ({ setActiveSection }) => {
  return (
    <div>
      <Main setActiveSection={setActiveSection} />
    </div>
  );
};

export default HomepageLayout;
