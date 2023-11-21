import { StyleSheet } from 'react-native'

import globalThemeStyle, { globalColors } from '@styling/GlobalTheme.style'
export default StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 20
    },
    containerOrientation: {
        flexDirection: 'row', 
        alignItems: 'center',
        gap: 7
    },
    flag: {
        width: 20, 
        resizeMode: 'contain'
    },
    text: {
        ...globalThemeStyle.text_Regular,
        fontSize: 14, 
        color: globalColors.BODY_TEXT_COLOR
    },
    textField: {
        width: 100
    }
})
