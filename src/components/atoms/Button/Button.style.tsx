import { StyleSheet } from 'react-native'

import { globalColors } from '@styling/GlobalTheme.style'
export default StyleSheet.create({
    button: {
        borderRadius: 10,
        padding: 15
    },
    primary: {

    },
    secondaryButton: {
        borderColor: globalColors.BUTTON_BORDER_COLOR, 
        borderWidth: 1
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'MulishSemiBold'
    },
    shadow: {
        shadowOffset: {width: 0, height: 6},
        shadowRadius: 16,
        shadowColor: globalColors.SHADOW_COLOR,
        elevation: 20,
    },
    primaryText: {
        color: 'white'
    },
    secondaryText: {
        color: globalColors.BUTTON_SECONDARY_TEXT_COLOR
    }
})