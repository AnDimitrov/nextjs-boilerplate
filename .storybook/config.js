import { configure, addDecorator } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import { themes } from "@storybook/components";
import { withKnobs } from "@storybook/addon-knobs";
import { withBackgrounds } from "@storybook/addon-backgrounds";

addDecorator(
  withOptions({
    name: "Nextjs boilerplate",
    url: "#",
    addonPanelInRight: true,
    selectedAddonPanel: "storybooks/storybook-addon-knobs",
    theme: themes.dark
  })
);

addDecorator(
  withBackgrounds([
    { name: "default", value: "#fafafa", default: true },
    { name: "twitter", value: "#00aced", default: true },
    { name: "facebook", value: "#3b5998" }
  ])
);

addDecorator(withKnobs);

function loadStories() {
  require("../stories");
  // You can require as many stories as you need.
}

configure(loadStories, module);
