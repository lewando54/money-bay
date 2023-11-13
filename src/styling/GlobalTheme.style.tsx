import { StyleSheet } from 'react-native'
export const PRIMARY_GRADIENT_END_COLOR = '#16579D'
export const PRIMARY_GRADIENT_START_COLOR = '#97DAFF'
export const SECONDARY_GRADIENT_FULL_COLOR = '#F1F5FD'
export const MAIN_DARK = '#1B1D4D'
export const BODY_TEXT_COLOR = '#4C4C60'
export const GOOD_GREEN = '#3EB290'
export const PLAIN_BLUE = '#55ACEE'
export const ORANGE = '#FF8A71'
export const WARNING_YELLOW = '#EECC55'
export const MAIN_BG = '#161966'
export const LINK_COLOR = '#FF5887'
export const BUTTON_BORDER_COLOR = '#CED6E1'
export const SHADOW_COLOR = '#16196670'
export default StyleSheet.create({
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
        color: MAIN_DARK
    },
    text_SubTitle: {
        fontFamily: 'MulishRegular',
        fontSize: 12,
        color: BODY_TEXT_COLOR 
    },
    default_Shadow: {
        shadowOffset: {width: 0, height: 6},
        shadowRadius: 16,
        shadowColor: '#16196670',
        shadowOpacity: 0.08,
        elevation: 20,
    }
})