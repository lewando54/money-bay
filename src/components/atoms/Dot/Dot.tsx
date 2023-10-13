import React from 'react'
import dotStyle from './Dot.style'
import Animated, { Extrapolate, SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { Dimensions } from 'react-native'
import { MAIN_DARK } from '../../../styling/GlobalTheme.style'

interface IDotProps {
    index?: number
    x?: SharedValue<number>
    color?: string
    testID?: string
}

export default function Dot({
    index,
    x,
    color=MAIN_DARK,
    testID
}: IDotProps){
    const { width } = Dimensions.get('window')

    const animatedDotStyle = x && useAnimatedStyle(() => ({
        opacity: interpolate(
            x.value, 
            [
                (index - 1) * width,
                index * width,
                (index + 1) * width
            ], 
            [0.2, 1, 0.2],
            Extrapolate.CLAMP
        )
    }))

    return (
        <Animated.View style={[dotStyle.dot, {borderColor: color}, x && animatedDotStyle]} />
    )
}
