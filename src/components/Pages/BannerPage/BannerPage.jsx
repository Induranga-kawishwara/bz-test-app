import style from "./BannerPage.module.css";
import { Button, Container, Icon } from "semantic-ui-react";

const BannerPage = () => {
  return (
    <div className={style.section_container}>
      <Container>
        <div className={style.text_section}>
          <h2 className={style.text_title}>
            Crowdsource your security testing in a smarter way with{" "}
            <span
              style={{
                fontFamily: "Edo",
              }}
            >
              Bug Zero
            </span>
          </h2>
          <div className={style.button_section}>
            <Button
              size="huge"
              color="yellow"
              style={{ color: "Black", borderRadius: "25px" }}
            >
            <Icon name="right arrow" />
             <span style={{ marginLeft: "10px" }}>
                  {" "}
                  <a
                    href={`${process.env.PUBLIC_URL}/joinwithus`}
                    style={{ color: "white" }}
                  >
                    Get Started
                  </a>
                </span>
            </Button>
            <Button
              size="huge"
              color="yellow"
              style={{ borderRadius: "25px" }}
              inverted
            >
              <a href ="https://blog.bugzero.io/bug-bounties-in-sri-lanka-650f34bd162e" style={{color:"white"}}>
              Learn More
            </a>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerPage;
