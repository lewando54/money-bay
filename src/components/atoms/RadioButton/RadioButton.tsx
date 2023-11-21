import React from 'react'
import { useEffect } from 'react'
import { Pressable } from 'react-native'
import Animated, { Easing,useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import radioButtonStyle from './RadioButton.style'

import { globalColors } from '@styling/GlobalTheme.style'

export interface IRadioButtonProps {
    id?: number
    group?: string
    chosen: boolean
    color?: string
    onPress: (id: number, group: string, chosen: boolean) => void
    testID?: string
}

export default function RadioButton({
    id=0,
    group='default',
    chosen=false,
    color=globalColors.GOOD_GREEN,
    onPress,
    testID
}: IRadioButtonProps){
    const circleSize = useSharedValue(0)

    const circleAnimatedStyle = useAnimatedStyle(() => ({
        width: withTiming(circleSize.value, {duration: 100, easing: Easing.inOut(Easing.exp)}),
        height: withTiming(circleSize.value, {duration: 100, easing: Easing.inOut(Easing.exp)})
    }))

    useEffect(() => {
        if(chosen){
            circleSize.value += 10
        }
    }, [])

    const onPressHandle = () => {
        if(onPress){
            onPress(id, group, chosen)
        }

        if(chosen){
            circleSize.value -= 10
        }
        else {
            circleSize.value += 10
        }
    }

    return (
        <Pressable onPress={onPressHandle} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} style={radioButtonStyle.container} testID={testID}>
            <Animated.View style={[{backgroundColor: color, borderRadius: 100}, circleAnimatedStyle]}>
            </Animated.View>
        </Pressable>
    )
}
