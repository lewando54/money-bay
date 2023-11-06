import { Dimensions, StyleSheet } from 'react-native'

import globalThemeStyle, { MAIN_BG, MAIN_DARK } from '../../../styling/GlobalTheme.style'

const {width, height} = Dimensions.get('screen')

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FAFCFF'
    },
    imageBackgroundContainer: {
        height: height * 0.442118,
        backgroundColor: MAIN_BG,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        marginBottom: height * -0.0307
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height * 0.0541,
        paddingHorizontal: width * 0.0426,
        borderBottomColor: '#CED6E14E',
        borderBottomWidth: 1,
        paddingBottom: height * 0.0221
    },
    miniProfileIcon: {
        width: 22,
        height: 22
    },
    currencyValue: {
        ...globalThemeStyle.text_Regular,
        fontSize: 16
    },
    cardsList: {
        padding: 20,
        height: height * 0.2660,
        flexGrow: 0
    },
    buttonsAndPaymentsContainer: {
        paddingHorizontal: width * 0.0533,
        gap: height * 0.0309
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 23
    },
    latestTransactionContainer: {
        gap: 6
    },
    latestTransactionHeadingContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 6
    },
    latestTransactionHeading: {
        ...globalThemeStyle.text_Medium,
        color: MAIN_DARK,
        fontSize: 20
    },
    latestTransactionViewAllLink: {
        fontSize: 16
    }
})
