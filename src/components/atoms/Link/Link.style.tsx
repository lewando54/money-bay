import { StyleSheet } from 'react-native'

import globalThemeStyle, { globalColors } from '@styling/GlobalTheme.style'
export default StyleSheet.create({
    text: {
        ...globalThemeStyle.text_Regular,
        fontSize: 16,
        color: globalColors.LINK_COLOR
    }
})
