import React from 'react'
import OnboardingTemplate from '../../components/templates/OnboardingTemplate/OnboardingTemplate'
import Images from 'assets/images'

const OnboardingPage = ({navigation}) => {
    const data = [
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
            testID: 'slide-0'
        },
        {
            id: 2,
            imageSource: Images.onboarding4,
            heading: 'Easy payments all over the world!',
            body: 'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
            testID: 'slide-0'
        }
    ]

    const onButtonPressHandle = () => {
        navigation.navigate('Sign In')
    }

    return (
        <OnboardingTemplate data={data} onButtonPress={onButtonPressHandle}/>
    )
}

export default OnboardingPage