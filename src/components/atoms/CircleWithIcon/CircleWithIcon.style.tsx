import { StyleSheet } from 'react-native'

interface ICircleWithIconStyleProps {
    size: number
    backgroundColor: string
}

export default ({size, backgroundColor}: ICircleWithIconStyleProps) => StyleSheet.create({
    circle: {
        width: size,
        height: size,
        borderRadius: size * 2,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
