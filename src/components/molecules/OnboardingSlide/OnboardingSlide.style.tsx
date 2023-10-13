import { Dimensions, StyleSheet } from 'react-native'
import globalThemeStyle, { BODY_TEXT_COLOR, MAIN_DARK } from '../../../styling/GlobalTheme.style'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width,
        height: height * 0.775862
    },
    image: {
        width: width * 0.89333333,
        height: height * 0.3928571,
        resizeMode: 'contain',
    },
    textContainer: {
        width: width * 0.8933,
        alignItems: 'center',
        gap: 20,
        paddingHorizontal: 20,
        paddingTop: height * 0.07389162561576355,
        overflow: 'hidden'
    },
    heading: {
        ...globalThemeStyle.text_Bold,
        fontSize: 28,
        color: MAIN_DARK,
        textAlign: 'center'
    },
    body: {
        ...globalThemeStyle.text_Regular,
        fontSize: 16,
        color: BODY_TEXT_COLOR,
        textAlign: 'center',
        paddingHorizontal: 6
    }
})
