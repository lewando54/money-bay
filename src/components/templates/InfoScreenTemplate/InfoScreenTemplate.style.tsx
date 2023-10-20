import { Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get('screen')
import globalThemeStyle from '../../../styling/GlobalTheme.style'
export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bgImage: {
        width: width,
        height: height,
        resizeMode: 'contain',
        position: 'absolute',
        top: height * -0.1740
    },
    iconTitleContainer: {
        marginBottom: 'auto',
        marginTop: height * 0.2327,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width * 0.1233
    },
    titleText: {
        ...globalThemeStyle.text_Bold,
        fontSize: 36
    },
    buttonsContainer: {
        marginTop: 'auto',
        width: '100%',
        padding: width * 0.0533,
        gap: height * 0.0172
    }
})
