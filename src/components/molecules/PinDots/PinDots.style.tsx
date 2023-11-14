import { StyleSheet } from 'react-native'

import { MAIN_DARK } from '@styling/GlobalTheme.style'
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 12
    },
    base: {
        backgroundColor: MAIN_DARK,
        width: 8,
        height: 8,
        borderRadius: 100
    },
    filled: {
        opacity: 1
    },
    notFilled: {
        opacity: 0.2
    },
})
