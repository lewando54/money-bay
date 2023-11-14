import { Dimensions, StyleSheet } from 'react-native'

import globalThemeStyle, { BODY_TEXT_COLOR, MAIN_DARK } from '@styling/GlobalTheme.style'

const {width, height} = Dimensions.get('screen')

export default StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width,
        height: height * 0.77,
        marginTop: height * 0.08
    },
    image: {
        width: width * 0.90,
        height: height * 0.39,
        resizeMode: 'contain',
    },
    textContainer: {
        width: width * 0.8933,
        alignItems: 'center',
        gap: 20,
        paddingHorizontal: 20,
        paddingTop: height * 0.06,
        overflow: 'hidden'
    },
    heading: {
        ...globalThemeStyle.text_Bold,
        fontSize: 28,
        color: MAIN_DARK,
        textAlign: 'center'
    },
    body: {
        ...globalThemeStyle.text_Regular,
        fontSize: 16,
        color: BODY_TEXT_COLOR,
        textAlign: 'center',
        paddingHorizontal: 6
    }
})
