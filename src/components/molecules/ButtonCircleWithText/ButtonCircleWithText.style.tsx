import { StyleSheet } from 'react-native'
import { MAIN_DARK } from '../../../styling/GlobalTheme.style'

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: 60,
        height: 95,
        elevation: 20,
        shadowColor: MAIN_DARK,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 16,
        shadowOpacity: 0.08,
        gap: 10
    },
    text: {
        color: MAIN_DARK,
        textAlign: 'center'
    }
})
