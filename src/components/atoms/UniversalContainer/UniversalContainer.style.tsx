import { StyleSheet } from 'react-native'

export default ({width, padding, backgroundColor}) => StyleSheet.create({
    container: {
        width: width,
        padding: padding,
        backgroundColor: backgroundColor,
        borderRadius: 10
    }
})