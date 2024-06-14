import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

class HomePageNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "home" };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment
        inverted
        style={{ position: "fixed", zIndex: 10, width: "100%" }}
      >
        <Menu.Item
          as="a"
          style={{
            color: "#f4c700",
            fontFamily: "Edo",
            fontSize: "2em",
          }}
        >
          Bug Zero
        </Menu.Item>
        <Menu inverted pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Why Join Us?"
            active={activeItem === "Why Join Us?"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Features"
            active={activeItem === "Features"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Our Scope"
            active={activeItem === "Our Scope"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="The Team"
            active={activeItem === "The Team"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}

export default HomePageNavBar;
