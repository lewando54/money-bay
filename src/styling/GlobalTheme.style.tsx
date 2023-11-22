import { StyleSheet } from 'react-native'
export const globalColors = {
    PRIMARY_GRADIENT_END_COLOR: '#16579D',
    PRIMARY_GRADIENT_START_COLOR: '#97DAFF',
    SECONDARY_GRADIENT_FULL_COLOR: '#F1F5FD',
    MAIN_DARK: '#1B1D4D',
    BODY_TEXT_COLOR: '#4C4C60',
    GOOD_GREEN: '#3EB290',
    PLAIN_BLUE: '#55ACEE',
    ORANGE: '#FF8A71',
    WARNING_YELLOW: '#EECC55',
    MAIN_BG: '#161966',
    LINK_COLOR: '#FF5887',
    BUTTON_BORDER_COLOR: '#CED6E1',
    SHADOW_COLOR: '#16196670',
    BUTTON_SECONDARY_TEXT_COLOR: '#1B1D4D',
    BLACK: '#000'
} as const
export type TGlobalColors = keyof typeof globalColors | (typeof globalColors)[keyof typeof globalColors]
export default StyleSheet.create({
    text_default: {
        fontFamily: 'MulishRegular',
        color: globalColors.MAIN_DARK,
        fontSize: 14
    },
    text_SemiBold: {
        fontFamily: 'MulishSemiBold',
        color: 'white'
    },
    text_Regular: {
        fontFamily: 'MulishRegular',
        color: 'white'
    },
    text_Bold: {
        fontFamily: 'MulishBold',
        color: 'white'
    },
    text_Medium: {
        fontFamily: 'MulishMedium',
        color: 'white'
    },
    text_Title: {
        fontFamily: 'MulishSemiBold',
        fontSize: 14,
        color: globalColors.MAIN_DARK
    },
    text_SubTitle: {
        fontFamily: 'MulishRegular',
        fontSize: 12,
        color: globalColors.BODY_TEXT_COLOR 
    },
    default_Shadow: {
        shadowOffset: {width: 0, height: 6},
        shadowRadius: 16,
        shadowColor: '#16196670',
        shadowOpacity: 0.08,
        elevation: 20,
    }
})