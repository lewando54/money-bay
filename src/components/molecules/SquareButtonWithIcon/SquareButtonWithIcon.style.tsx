import { StyleSheet } from 'react-native'

import globalThemeStyle, { globalColors } from '@styling/GlobalTheme.style'
export default StyleSheet.create({
    outerContainer: {
        width: 150,
        aspectRatio: 15/13
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    text: {
        ...globalThemeStyle.text_SemiBold,
        color: globalColors.MAIN_DARK,
        fontSize: 16
    }
})
