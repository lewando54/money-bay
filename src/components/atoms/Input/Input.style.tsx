import { StyleSheet } from 'react-native'

import { globalColors } from '@styling/GlobalTheme.style'
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
        color: globalColors.MAIN_DARK
    },
    focused: {
        borderColor: globalColors.BODY_TEXT_COLOR
    }
})
