import { StyleSheet } from 'react-native'

import { globalColors } from '@styling/GlobalTheme.style'
export default StyleSheet.create({
    moneyContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    floatCurrencyContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    minusSign: {
        fontSize: 20,
        color: globalColors.MAIN_DARK
    }
})
