﻿import React from 'react'
import { useState } from 'react'
import accordionStyle from './Accordion.style'
import { Pressable, Text, View } from 'react-native'
import Animated, { Easing, concat, interpolate, interpolateColor, measure, runOnUI, useAnimatedRef, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated'
import { Entypo } from '@expo/vector-icons'
import globalThemeStyle, { BODY_TEXT_COLOR } from '../../../styling/GlobalTheme.style'

interface IAccordionProps {
    extended?: boolean
    headerText?: string
    bodyText?: string
}

export default function Accordion({
    extended=false,
    headerText='How does the identification code process work?',
    bodyText='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu dolor in repreh enderitr lla cca ecat cupidatat non proiden paria.'
}: IAccordionProps){
    const [isExtended, setIsExtended] = useState(extended)
    const textRef = useAnimatedRef<Animated.View>()
    const heightValue = useSharedValue(0)
    const rotationValue = useSharedValue(0)

    const heightAnimationStyle = useAnimatedStyle(() => ({
        height: heightValue.value,
    }))

    const textColorAnimationStyle = useAnimatedStyle(() => ({
        color: interpolateColor(rotationValue.value, [0, 1], ['black', 'red'])
    }))

    const separatorAnimationStyle = useAnimatedStyle(() => ({
        borderTopWidth: rotationValue.value
    }))

    const rotationAnimationStyle = useAnimatedStyle(() => ({
        transform: [{rotateZ: interpolate(rotationValue.value, [0, 1], [0, 180]) + 'deg'}]
    }))

    const onPressHandle = () => {
        if (!isExtended) {
            runOnUI(() => {
                'worklet'
                heightValue.value = withTiming(measure(textRef)!.height)
            })()
            rotationValue.value = withTiming(1)
        } else {
            heightValue.value = withTiming(0)
            rotationValue.value = withTiming(0)
        }
        setIsExtended(() => !isExtended)
    }

    return (
        <Pressable onPress={onPressHandle}>
            <Animated.View style={[{backgroundColor: 'white', borderRadius: 10, overflow: 'hidden'}]}>
                <View style={{padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Animated.Text style={[globalThemeStyle.text_Title, textColorAnimationStyle]}>{headerText}</Animated.Text>
                    <Animated.View style={rotationAnimationStyle}>
                        <Entypo name="chevron-small-down" size={24}/>
                    </Animated.View>
                </View>
                <Animated.View style={[{borderTopColor: '#CED6E1'}, heightAnimationStyle, separatorAnimationStyle]}>
                    <Animated.View ref={textRef} style={{position: 'absolute', width: '100%', top: 0, padding: 20}}>
                        <Text style={[globalThemeStyle.text_Regular, {color: BODY_TEXT_COLOR}]}>{bodyText}</Text>
                    </Animated.View>
                </Animated.View>
            </Animated.View>
        </Pressable>
    )
}