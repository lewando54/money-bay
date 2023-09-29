import { StyleSheet } from 'react-native'

interface IUniversalContainerStyleProps {
    width: string | number
    height: string | number
    padding: string | number
    backgroundColor: string
}

export default ({width, height, padding, backgroundColor}: IUniversalContainerStyleProps) => StyleSheet.create({
    container: {
        width: width,
        height: height,
        padding: padding,
        backgroundColor: backgroundColor,
        borderRadius: 10
    }
})