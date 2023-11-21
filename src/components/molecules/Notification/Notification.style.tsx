import { StyleSheet } from 'react-native'

import globalThemeStyle, { globalColors } from '@styling/GlobalTheme.style'
export default StyleSheet.create({
    iconAndTitleWrapper: {
        flexDirection: 'row', 
        gap: 8, 
        alignItems: 'flex-start'
    },
    titleWrapper: {
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        width: '100%',
        flexShrink: 1,
        marginTop: -3
    },
    notificationTitleText: {
        ...globalThemeStyle.text_SemiBold,
        fontSize: 16,
        color: globalColors.MAIN_DARK
    },
    notificationBodyText: {
        ...globalThemeStyle.text_Regular, 
        fontSize: 16,
        color: globalColors.MAIN_DARK
    },
    notificationTimeText: {
        ...globalThemeStyle.text_Regular,
        fontSize: 12,
        color: globalColors.BODY_TEXT_COLOR
    }
})
