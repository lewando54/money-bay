export default ({ config }) => ({
    ...config,
    name: 'Storybook Tutorial Template',
    slug: 'storybook-tutorial-template',
    splash: {
        image: './assets/splash.png',
        backgroundColor: '#1B1D4D'
    },
    extra: {
        // eslint-disable-next-line no-undef
        storybookEnabled: process.env.STORYBOOK_ENABLED,
    },
    experiments: {
        tsconfigPaths: true
    },
    android: {
        package: 'com.anonymous.storybooktutorialtemplate'
    }
})
