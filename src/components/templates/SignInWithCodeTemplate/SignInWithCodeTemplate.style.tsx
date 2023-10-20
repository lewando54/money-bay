import { Dimensions, StyleSheet } from 'react-native'
import globalThemeStyle, { BODY_TEXT_COLOR, MAIN_DARK } from '../../../styling/GlobalTheme.style'

const { width } = Dimensions.get('screen')

export default StyleSheet.create({
    background: {
        width: width,
        resizeMode: 'contain',
        maxHeight: width - 27,
        position: 'absolute'
    },
    mainContainer: {
        flex: 1,
        gap: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePicture: {
        borderRadius: 100,
        width: width * 0.1866,
        height: width * 0.1866
    },
    button: {
        width: 80,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        ...globalThemeStyle.text_Regular,
        fontSize: 24,
        color: MAIN_DARK
    },
    buttonContainer: {
        width: width * 0.6933,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    usernameContainer: {
        alignItems: 'center',
        marginBottom: -10
    },
    usernameText: {
        ...globalThemeStyle.text_Medium,
        fontSize: 20,
        color: MAIN_DARK
    },
    usernameSubText: {
        ...globalThemeStyle.text_Medium,
        fontSize: 16,
        color: BODY_TEXT_COLOR
    }
})
