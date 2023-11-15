import React from 'react'
import { Dimensions } from 'react-native'
import Animated, { Extrapolate, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'

import dotStyle from './Dot.style'

import { MAIN_DARK } from '@styling/GlobalTheme.style'

interface IDotProps {
    index?: number
    listOffsetX?: SharedValue<number>
    color?: string
    itemLengthPercent?: number
    testID?: string
}

export default function Dot({
    index,
    listOffsetX,
    color=MAIN_DARK,
    itemLengthPercent=1,
    testID
}: IDotProps){
    const { width } = Dimensions.get('window')

    const animatedDotStyle = listOffsetX && useAnimatedStyle(() => ({
        opacity: interpolate(
            listOffsetX.value, 
            [
                (index - 1) * width * itemLengthPercent,
                index * width * itemLengthPercent,
                (index + 1) * width * itemLengthPercent
            ], 
            [0.2, 1, 0.2],
            Extrapolate.CLAMP
        )
    }))

    return (
        <Animated.View style={[dotStyle.dot, {borderColor: color}, listOffsetX && animatedDotStyle]} testID={testID}/>
    )
}
