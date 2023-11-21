import { Dimensions, StyleSheet } from 'react-native'

import globalThemeStyle, { globalColors } from '@styling/GlobalTheme.style'
const { width } = Dimensions.get('screen')
export default StyleSheet.create({
    bodyText: {
        ...globalThemeStyle.text_Regular,
        color: globalColors.BODY_TEXT_COLOR,
        fontSize: 16,
        textAlign: 'center',
        marginTop: width * 0.0533
    }
})