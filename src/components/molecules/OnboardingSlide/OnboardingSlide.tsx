import React from 'react'
import onboardingSlideStyle from './OnboardingSlide.style'
import { Dimensions, Image, ImageSourcePropType, StyleProp, Text, View, ViewStyle } from 'react-native'
import Logo from './assets/Logo.svg'
import Animated, { Extrapolate, SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated'

interface IOnboardingSlideProps {
    id?: number
    index?: number
    imageSource?: ImageSourcePropType
    style?: StyleProp<ViewStyle>
    heading?: string
    opacity?: SharedValue<number>
    body?: string
    testID?: string
}

export default function OnboardingSlide({
    id,
    index,
    imageSource=require('./assets/onboarding-2.png'),
    style,
    heading='Welcome to MoneyBay app!',
    opacity,
    body='Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
    testID
}: IOnboardingSlideProps){
    const {width} = Dimensions.get('window')

    const opacityAnimation = opacity && useAnimatedStyle(() => {
        const opacityV = interpolate(
            opacity.value, 
            [
                (index - 1) * width,
                index * width,
                (index + 1) * width
            ],
            [0, 1, 0],
            Extrapolate.CLAMP
        )

        return {
            opacity: opacityV
        }
    })

    return (
        <Animated.View testID={testID} style={[onboardingSlideStyle.mainContainer, style, opacity && opacityAnimation]} key={id}>
            <Image source={imageSource} style={onboardingSlideStyle.image}/>
            <View style={onboardingSlideStyle.textContainer}>
                <Logo />
                <Text style={onboardingSlideStyle.heading}>{heading}</Text>
                <Text style={onboardingSlideStyle.body}>{body}</Text>
            </View>
        </Animated.View>
    )
}
