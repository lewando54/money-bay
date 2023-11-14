import { StyleSheet } from 'react-native'

import { MAIN_DARK } from '@styling/GlobalTheme.style'
export default StyleSheet.create({
    baseStyle: {
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 10
    },
    chosenStyle: {
        backgroundColor: MAIN_DARK
    },
    baseText: {
        color: MAIN_DARK,
        fontFamily: 'MulishSemiBold',
        fontSize: 16
    },
    chosenText: {
        color: 'white'
    }
})
