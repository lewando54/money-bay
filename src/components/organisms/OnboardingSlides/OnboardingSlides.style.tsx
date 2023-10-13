import { Dimensions, StyleSheet } from 'react-native'

const {height} = Dimensions.get('screen')

export default StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: height * 0.5,
        justifyContent: 'flex-end',
        paddingBottom: height * 0.02650246,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        gap: 45,
        marginHorizontal: 20
    }
})
