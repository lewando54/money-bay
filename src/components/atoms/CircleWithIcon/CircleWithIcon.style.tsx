import { StyleSheet } from 'react-native'
export default (props) => StyleSheet.create({
    circle: {
        width: props.size,
        height: props.size,
        borderRadius: props.size * 2,
        backgroundColor: props.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
