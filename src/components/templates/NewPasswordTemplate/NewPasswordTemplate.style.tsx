import { Dimensions, StyleSheet } from 'react-native'

import globalThemeStyle, { MAIN_DARK } from '../../../styling/GlobalTheme.style'
const { width, height } = Dimensions.get('screen')

export default StyleSheet.create({
    mainContainer: {
        gap: height * 0.0172,
        padding: width * 0.0446
    },
    inputContainer: {
        gap: height * 0.0092
    },
    text: {
        ...globalThemeStyle.text_Regular,
        color: MAIN_DARK,
        fontSize: 16
    },
})
