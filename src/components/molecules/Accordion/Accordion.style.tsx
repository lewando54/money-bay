import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden'
    },
    headerContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bodyText: {
        position: 'absolute',
        width: '100%',
        top: 0,
        padding: 20
    }
})
