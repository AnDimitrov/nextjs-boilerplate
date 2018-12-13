import React from "react";

import { storiesOf, addDecorator } from "@storybook/react"; // eslint-disable-line
import { action } from "@storybook/addon-actions"; // eslint-disable-line
import { linkTo } from "@storybook/addon-links"; // eslint-disable-line
import { text } from "@storybook/addon-knobs/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import { Button, Welcome } from "@storybook/react/demo"; // eslint-disable-line

addDecorator(storyFn => <div style={{ padding: "15px" }}>{storyFn()}</div>);

addDecorator(withInfo);

storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("Button")} />);

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>{text("Button text", "Hello Button")}</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="emoji text">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
