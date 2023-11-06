import { StyleSheet } from 'react-native'

import globalThemeStyle, { LINK_COLOR } from '../../../styling/GlobalTheme.style'
export default StyleSheet.create({
    text: {
        ...globalThemeStyle.text_Regular,
        fontSize: 16,
        color: LINK_COLOR
    }
})
