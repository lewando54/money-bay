import React from 'react'
import { useState } from 'react'
import { Pressable,  View } from 'react-native'
import Animated, { interpolate, interpolateColor, measure, runOnUI, useAnimatedRef, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Entypo } from '@expo/vector-icons'

import { CustomText } from '@atoms'

import accordionStyle from './Accordion.style'

import globalThemeStyle, { globalColors } from '@styling/GlobalTheme.style'

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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        transform: [{rotateZ: interpolate(rotationValue.value, [0, 1], [0, 180]) + 'deg'}]
    }))

    const onPressHandle = () => {
        if (!isExtended) {
            runOnUI(() => {
                'worklet'
                if(measure(textRef)){
                    heightValue.value = withTiming(measure(textRef)!.height)
                } 
                else {
                    heightValue.value = withTiming(100)
                }
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
            <Animated.View style={accordionStyle.mainContainer}>
                <View style={accordionStyle.headerContainer} testID='acc-header'>
                    <Animated.Text style={[globalThemeStyle.text_Title, textColorAnimationStyle]}>{headerText}</Animated.Text>
                    <Animated.View style={rotationAnimationStyle}>
                        <Entypo name="chevron-small-down" size={24}/>
                    </Animated.View>
                </View>
                <Animated.View testID='acc-body' style={[{borderTopColor: '#CED6E1'}, heightAnimationStyle, separatorAnimationStyle]}>
                    <Animated.View ref={textRef} style={accordionStyle.bodyText}>
                        <CustomText style={[globalThemeStyle.text_Regular, {color: globalColors.BODY_TEXT_COLOR}]}>{bodyText}</CustomText>
                    </Animated.View>
                </Animated.View>
            </Animated.View>
        </Pressable>
    )
}
