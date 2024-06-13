import style from "./BannerPage.module.css";
import { Button, Icon } from "semantic-ui-react";

const BannerPage = () => {
  return (
    <div className={style.section_container}>
      <div className={style.text_section}>
        <h2 className={style.text_title}>
          Crowdsource your security testing in a smart way with Bug Zero
        </h2>
        <div className={style.button_section}>
          <Button size="huge" color="yellow" style={{ color: "Black" }}>
            Get Started
            <Icon name="right arrow" />
          </Button>
          <Button size="huge" color="yellow" inverted>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
