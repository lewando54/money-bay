﻿import { Pressable, View } from 'react-native'
import checkboxStyle from './Checkbox.style'
import { GOOD_GREEN } from '../../../styling/GlobalTheme.style'
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming, Easing } from 'react-native-reanimated';

interface ICheckboxProps {
    checked: boolean
    checkedbackgroundColor?: string
    circleBackgroundColor?: string
    backgroundColor?: string
    onPress: (newValue: boolean) => void
    testID?: string
}

export default function Checkbox({
    checked=false,
    checkedbackgroundColor=GOOD_GREEN,
    circleBackgroundColor='white',
    backgroundColor='#CED6E1',
    onPress,
    testID
}: ICheckboxProps){

    const translateX = useSharedValue(0);
    const backgroundColorProgress = useSharedValue(0);

    const animatedCircleStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: withTiming(translateX.value * 2, {duration: 500, easing: Easing.inOut(Easing.exp)}) }],
    }));

    const animatedBackgroundColorStyle = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(
            backgroundColorProgress.value,
            [0, 1],
            [backgroundColor, checkedbackgroundColor]
          )
    }));

    const handleOnPress = () => {
        onPress(!checked)
        
        if(!checked){
            translateX.value += 7
        }
        else{
            translateX.value -= 7
        }

        backgroundColorProgress.value = withTiming(1 - backgroundColorProgress.value, { duration: 500 })
    }

    return (
        <Animated.View style={[checkboxStyle.container, animatedBackgroundColorStyle]}>
            <Pressable onPress={handleOnPress} testID={testID}>
                <Animated.View style={[checkboxStyle.circle, {backgroundColor: circleBackgroundColor}, checkboxStyle.shadow, animatedCircleStyle]}></Animated.View>
            </Pressable>
        </Animated.View>
    )
}