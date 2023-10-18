import { StyleSheet } from 'react-native'
import globalThemeStyle, { MAIN_DARK } from '../../../styling/GlobalTheme.style'
export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        gap: 25
    },
    heading: {
        textAlign: 'center',
        fontFamily: 'MulishBold',
        fontSize: 44
    },
    rememberAndPasswordContainer: {
        flexDirection: 'row'
    },
    rememberContainer: {
        flexDirection: 'row',
        gap: 14
    },
    rememberText: {
        ...globalThemeStyle.text_Regular,
        color: MAIN_DARK,
        fontSize: 16
    },
    registerTextContainer: {
        flexDirection: 'row',
        gap: 5
    }
})
