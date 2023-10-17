import React from 'react'
import pinDotsStyle from './PinDots.style'
import { View } from 'react-native'
import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated'

interface IPinDotsProps {
    maxLength?: number,
    currLength?: number,
    x?: SharedValue<number>
    testID?: string
}

export default function PinDots({
    maxLength=4,
    currLength=0,
    x,
    testID
}: IPinDotsProps){
    const shakeAnimationStyle = x && useAnimatedStyle(() => ({
        transform: [{translateX: x.value}]
    }))

    const Dots = Array(maxLength).fill(0).map((val, index) => {
        if(index < currLength){
            return <View key={index} style={[pinDotsStyle.base, pinDotsStyle.filled]}></View>
        }
        else {
            return <View key={index} style={[pinDotsStyle.base, pinDotsStyle.notFilled]}></View>
        }
    })

    return (
        <Animated.View testID={testID} style={[pinDotsStyle.container, shakeAnimationStyle]}>
            {Dots}
        </Animated.View>
    )
}
