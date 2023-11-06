import { StyleSheet } from 'react-native'

import { BODY_TEXT_COLOR, MAIN_DARK } from '../../../styling/GlobalTheme.style'
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 14
    },
    text: {
        width: '100%',
        maxWidth: '93%',
        marginRight: 10,
        color: MAIN_DARK
    },
    focused: {
        borderColor: BODY_TEXT_COLOR
    }
})
