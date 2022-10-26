module.exports = {
  stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links", "@storybook/addon-essentials", "storybook-addon-next"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
