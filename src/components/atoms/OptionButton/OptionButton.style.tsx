import { StyleSheet } from 'react-native'

import { globalColors } from '@styling/GlobalTheme.style'
export default StyleSheet.create({
    baseStyle: {
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 10
    },
    chosenStyle: {
        backgroundColor: globalColors.MAIN_DARK
    },
    baseText: {
        color: globalColors.MAIN_DARK,
        fontFamily: 'MulishSemiBold',
        fontSize: 16
    },
    chosenText: {
        color: 'white'
    }
})
