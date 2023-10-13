import React, { useRef } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import socialButtonStyle from './SocialButton.style'
export type TiconProp = 'facebook' | 'google' | 'linkedin' | 'twitter'
import { Linking, Pressable } from 'react-native'
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

export interface ISocialButtonProps {
    color: string
    href: string
    icon: TiconProp
    testId: string
    size: number
}

function SocialButton ({ color, href, icon, testId, size }: ISocialButtonProps): React.ReactElement {
    const iconSize = size * 0.75
    const circleSize = size * 1.75

    const icons: { [key in TiconProp]: React.ReactNode } = {
        facebook: <FontAwesome5 name='facebook-f' color='white' size={iconSize}/>,
        google: <FontAwesome5 name='google-plus-g' color='white' size={iconSize}/>,
        linkedin: <FontAwesome5 name='linkedin-in' color='white' size={iconSize}/>,
        twitter: <FontAwesome5 name='twitter' color='white' size={iconSize}/>
    }

    const handlePress = async () => {
        await Linking.openURL(href)
    }

    const animatedButtonScale = useSharedValue(0)

    const animatedButtonStyle = useAnimatedStyle(() => ({
        transform: [{scale: interpolate(animatedButtonScale.value, [0, 1], [1, 1.25])}]
    }))

    const onPressIn = () => {
        animatedButtonScale.value = withTiming(1, {duration: 200, easing: Easing.inOut(Easing.exp)})
    }
  
    const onPressOut = () => {
        animatedButtonScale.value = withTiming(0, {duration: 200, easing: Easing.inOut(Easing.exp)})
    }

    return (
        <Animated.View style={animatedButtonStyle} testID={testId}>
            <Pressable onPress={handlePress} 
                style={[socialButtonStyle.base, {backgroundColor: color, width: circleSize, height: circleSize, borderRadius: circleSize}]}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
                testID='pressable-social-button'>
                {icons[icon]}
            </Pressable>
        </Animated.View>
    )
}
  
export default SocialButton