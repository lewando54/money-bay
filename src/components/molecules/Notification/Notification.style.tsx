import { StyleSheet } from 'react-native'
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
    }
})
