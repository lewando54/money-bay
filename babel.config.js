/* eslint-disable no-undef */
module.exports = function(api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            'react-native-reanimated/plugin', 
            [
                'module-resolver',
                {
                    root: ['.'],
                    alias: {
                        '@assets': './assets',
                        '@utils': './src/utils',
                        '@styling': './src/styling',
                        '@atoms': './src/components/atoms',
                        '@molecules': './src/components/molecules',
                        '@organisms': './src/components/organisms',
                        '@templates': './src/components/templates',
                        '@pages': './src/pages',
                        '@react-native-masked-view/masked-view': './src/modules/@react-native-masked-view/masked-view'
                    },
                },
            ],
        ]
    }
}
