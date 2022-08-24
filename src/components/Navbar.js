import React from "react";
import { Menu, Segment, Divider } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Segment basic>
      <Divider hidden />
      <Menu secondary>
        <Menu.Item>React-blog mock </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="Home"
            // active={activeItem === "logout"}
          />
          <Menu.Item
            name="About"
            // active={activeItem === "logout"}
          />
        </Menu.Menu>
      </Menu>
    </Segment>
  );
}
