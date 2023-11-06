import { Dimensions, StyleSheet } from 'react-native'

import globalThemeStyle, { MAIN_DARK } from '../../styling/GlobalTheme.style'
const { width, height } = Dimensions.get('screen')
export default StyleSheet.create({
    moneyTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: width * 0.0533
    },
    moneyBigText: {
        ...globalThemeStyle.text_Bold,
        fontSize: 28,
        color: MAIN_DARK
    },
    moneySmallText: {
        ...globalThemeStyle.text_Bold,
        fontSize: 16,
        color: MAIN_DARK,
        marginBottom: height * 0.005
    }
})