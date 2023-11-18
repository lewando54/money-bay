import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        gap: 10,
        padding: 21
    },
    titleAndGoalContainer: {
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center'
    },
    goalContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: 'auto'
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
    },
    progressBar: {
        borderRadius: 10,
        height: 5
    },
    moneyText: {
        marginLeft: 'auto'
    }
})
