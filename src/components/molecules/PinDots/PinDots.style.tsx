import { StyleSheet } from 'react-native'

import { globalColors } from '@styling/GlobalTheme.style'
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 12
    },
    base: {
        backgroundColor: globalColors.MAIN_DARK,
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
