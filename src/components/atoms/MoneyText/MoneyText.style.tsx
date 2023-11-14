import { StyleSheet } from 'react-native'

import { MAIN_DARK } from '@styling/GlobalTheme.style'
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
        color: MAIN_DARK
    }
})
