import { Dimensions, StyleSheet } from 'react-native'

import globalThemeStyle, { BODY_TEXT_COLOR } from '@styling/GlobalTheme.style'
const { width, height } = Dimensions.get('screen')

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        gap: height * 0.0172
    },
    dateText: {
        ...globalThemeStyle.text_Regular,
        color: BODY_TEXT_COLOR,
        fontSize: 12,
        marginBottom: height * 0.0107
    },
    searchContainer: {
        padding: width * 0.0533
    },
    innerContainer: {
        paddingHorizontal: width * 0.0533,
        marginBottom: height * 0.0107
    }
})
