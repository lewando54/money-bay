import { Dimensions, StyleSheet } from 'react-native'

import globalThemeStyle, { MAIN_DARK } from '@styling/GlobalTheme.style'
const { width, height } = Dimensions.get('screen')
export default StyleSheet.create({
    mainContainer: {
        padding: width * 0.0533,
        gap: height * 0.0184
    },
    balanceText: {
        ...globalThemeStyle.text_Regular,
        color: MAIN_DARK,
        fontSize: 12
    },
    amountInputWrapper: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexGrow: 0
    },
    moneyInputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        width: 'auto'
    },
    bigMoneyText: {
        ...globalThemeStyle.text_Medium,
        color: MAIN_DARK,
        fontSize: 28
    },
    smallMoneyText: {
        ...globalThemeStyle.text_Medium,
        color: MAIN_DARK,
        fontSize: 16
    }
})
