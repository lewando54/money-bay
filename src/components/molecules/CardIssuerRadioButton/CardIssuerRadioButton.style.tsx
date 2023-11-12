import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    mainContainer: {
        flexShrink: 1,
        flexGrow: 0,
        alignItems: 'flex-start'
    },
    univContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        flexShrink: 1,
        flexGrow: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        width: 'auto',
        paddingHorizontal: 20
    },
    image: {
        resizeMode: 'contain',
        width: 40,
        maxHeight: 16
    }
})
