/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import Images from '@assets/images'

import OnboardingTemplate from './OnboardingTemplate'

const meta = {
    component: OnboardingTemplate,
    argTypes: {
        data: { control: 'object' },
        onButtonPress: { action: 'buttonPressed' }
    }
} satisfies Meta<typeof OnboardingTemplate>

export default meta
type Story = StoryObj<typeof OnboardingTemplate>

export const Default: Story = {
    args: {
        data: [
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
    }
}
