import { Dimensions, StyleSheet } from 'react-native'

import globalThemeStyle, { BODY_TEXT_COLOR, MAIN_DARK }  from '../../../styling/GlobalTheme.style'

const {width, height} = Dimensions.get('screen')

export default StyleSheet.create({
    background: {
        width: width,
        resizeMode: 'contain',
        maxHeight: width - 27,
        position: 'absolute'
    },
    mainContentContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: height * 0.1034,
        gap: height * 0.0123
    },
    dateText: {
        ...globalThemeStyle.text_Regular,
        fontSize: 12,
        color: BODY_TEXT_COLOR
    },
    moneyContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    bigMoneyText: {
        ...globalThemeStyle.text_Bold,
        color: MAIN_DARK,
        fontSize: 28
    },
    smallMoneyText: {
        ...globalThemeStyle.text_Bold,
        color: MAIN_DARK,
        fontSize: 16,
        marginBottom: height * 0.004
    },
    tableContainer: {
        paddingHorizontal: width * 0.0533,
        width: '100%',
        flex: 1,
        marginBottom: height * 0.0246
    },
    cellContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: height * 0.0246,
        borderBottomColor: '#CED6E1',
        borderBottomWidth: 1
    },
    cellHeader: {
        ...globalThemeStyle.text_Regular,
        fontSize: 16,
        color: BODY_TEXT_COLOR
    },
    cellData: {
        ...globalThemeStyle.text_SemiBold,
        fontSize: 16,
        color: MAIN_DARK
    },
    downloadButton: {
        marginTop: 'auto',
    }
})
