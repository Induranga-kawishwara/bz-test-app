import style from "./BannerPage.module.css";
import { Button, Container, Icon } from "semantic-ui-react";

const BannerPage = () => {
  return (
    <div className={style.section_container}>
      <Container>
        <div className={style.text_section}>
          <h2 className={style.text_title}>
            Crowdsource your security testing in a smarter way with Bug Zero
          </h2>
          <div className={style.button_section}>
            <Button
              size="huge"
              color="yellow"
              style={{ color: "Black", borderRadius: "25px" }}
            >
              Get Started
              <Icon name="right arrow" />
            </Button>
            <Button
              size="huge"
              color="yellow"
              style={{ borderRadius: "25px" }}
              inverted
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerPage;
