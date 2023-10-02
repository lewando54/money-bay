import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        width: 39.48,
        height: 24,
        justifyContent: 'center',
        borderRadius: 20,
        padding: 2
    },
    circle: {
        width: 20.9,
        height: 20.9,
        backgroundColor: 'white',
        borderRadius: 20.9
    },
    shadow: {
        elevation: 5,
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.15
    }
})
