/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import OnboardingSlides from './OnboardingSlides'

const meta = {
    component: OnboardingSlides,
    argTypes: {
        data: {control: 'object'},
        onPress: {action: 'buttonPressed'}
    }
} satisfies Meta<typeof OnboardingSlides>

export default meta
type Story = StoryObj<typeof OnboardingSlides>

export const Default: Story = {
    args: {
        data: [
            {
                id: 0,
                imageSource: require('./assets/onboarding-2.png'),
                heading: 'Welcome to MoneyBay app!',
                body: 'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
                testID: 'slide-0'
            },
            {
                id: 1,
                imageSource: require('./assets/onboarding-3.png'),
                heading: 'Get a new card in a few clicks!',
                body: 'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
                testID: 'slide-0'
            },
            {
                id: 2,
                imageSource: require('./assets/onboarding-4.png'),
                heading: 'Easy payments all over the world!',
                body: 'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
                testID: 'slide-0'
            }
        ]
    }
}
