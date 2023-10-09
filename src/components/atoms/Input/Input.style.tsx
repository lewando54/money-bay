import { StyleSheet } from 'react-native'
import { BODY_TEXT_COLOR } from '../../../styling/GlobalTheme.style'
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'white'
    },
    text: {
        maxWidth: '93%'
    },
    focused: {
        borderColor: BODY_TEXT_COLOR,
    }
})
