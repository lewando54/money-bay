import React from 'react'
import { Pressable } from 'react-native'
import Animated, { Easing, interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Feather } from '@expo/vector-icons'

import { GOOD_GREEN } from '../../../styling/GlobalTheme.style'
import checkBoxSquareStyle from './CheckBoxSquare.style'

interface ICheckBoxSquareProps {
    checked?: boolean
    borderColor?: string
    checkedColor?: string
    checkmarkColor?: string
    onPress?: (newValue: boolean) => void
    testID?: string
}

export default function CheckBoxSquare({
    checked=false,
    borderColor='#868698',
    checkedColor=GOOD_GREEN,
    checkmarkColor='white',
    onPress,
    testID
}: ICheckBoxSquareProps){
    const animationProgress = useSharedValue(0)

    const checkmarkAnimationStyle = useAnimatedStyle(() => ({
        transform: [{ rotateZ: interpolate(animationProgress.value, [0, 1], [180, 0]) + 'deg' }],
        opacity: animationProgress.value
    }))

    const animatedBackgroundColorStyle = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(
            animationProgress.value,
            [0, 1],
            ['transparent', checkedColor]
        ),
        borderColor: interpolateColor(
            animationProgress.value,
            [0, 1],
            [borderColor, checkedColor]
        )
    }))

    const handleOnPress = () => {
        if(onPress) onPress(!checked)

        animationProgress.value = withTiming(1 - animationProgress.value, {duration: 500, easing: Easing.inOut(Easing.exp)})
    }

    return (
        <Pressable onPress={handleOnPress} testID={testID}>
            <Animated.View style={[checkBoxSquareStyle.container, {borderColor: borderColor, justifyContent: 'center', alignItems: 'center'}, animatedBackgroundColorStyle]}>
                <Animated.View style={[checkmarkAnimationStyle]}>
                    <Feather name="check" size={18} color={checkmarkColor} />
                </Animated.View>
            </Animated.View>
        </Pressable>
    )
}
