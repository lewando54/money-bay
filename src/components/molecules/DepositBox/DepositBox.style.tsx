import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        gap: 14,
        padding: 21
    },
    titleAndMoneyContainer: {
        flexDirection: 'row',
        gap: 7,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    moneyAndDateContainer: {
        marginTop: -6,
        justifyContent: 'flex-start',
        alignContent: 'flex-start'
    },
    moneyContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    percentContainer: {
        marginLeft: 'auto', 
        alignItems: 'flex-end', 
        marginTop: -6
    },
    floatCurrencyContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 2
    },
    floatCurrentCurrencyContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 1
    },
    currentMoneyContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 5
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8
    }
})
