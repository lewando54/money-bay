export default ({ config }) => ({
  ...config,
  name: "Storybook Tutorial Template",
  slug: "storybook-tutorial-template",
  splash: {
      image: "./assets/splash.png",
      backgroundColor: "#1B1D4Dr"
  },
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  android: {
    package: "com.anonymous.storybooktutorialtemplate"
  }
});
