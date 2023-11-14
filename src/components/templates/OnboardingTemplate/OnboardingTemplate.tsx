import React from 'react'
import { ImageBackground, View } from 'react-native'

import Images from '@assets/images'
import { OnboardingSlides, TOnboardingSlides } from '@organisms'

import onboardingTemplateStyle from './OnboardingTemplate.style'

interface IOnboardingTemplateProps {
    data: TOnboardingSlides
    onButtonPress?: () => void
    testID?: string
}

export default function OnboardingTemplate({
    data=[
        {
            id: 0,
            imageSource: Images.onboarding2,
            heading: 'Welcome to MoneyBay app!',
            body: 'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
            testID: 'slide-0'
        },
        {
            id: 1,
            imageSource: Images.onboarding3,
            heading: 'Get a new card in a few clicks!',
            body: 'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
            testID: 'slide-1'
        },
        {
            id: 2,
            imageSource: Images.onboarding4,
            heading: 'Easy payments all over the world!',
            body: 'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
            testID: 'slide-2'
        }
    ],
    onButtonPress,
    testID
}: IOnboardingTemplateProps){
    return (
        <View testID={testID} style={onboardingTemplateStyle.container}>
            <ImageBackground style={onboardingTemplateStyle.container} resizeMode="cover" source={require('../../../../assets/img/bg-story.png')}>
                <OnboardingSlides data={data} testID={testID} onPress={onButtonPress}/>
            </ImageBackground>
        </View>
    )
}
