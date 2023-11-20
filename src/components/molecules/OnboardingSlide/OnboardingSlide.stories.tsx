/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import OnboardingSlide from './OnboardingSlide'

const meta = {
    component: OnboardingSlide,
    argTypes: {
        id: {control: 'number'},
        index: {control: 'number'},
        imageSource: { control: 'select', options: [require('./assets/onboarding-2.png'), require('@assets/img/onboarding-3.png'), require('@assets/img/onboarding-4.png')]},
        style: {control: 'object'},
        heading: {control: 'text'},
        opacity: {control: 'number'},
        body: {control: 'text'},
    }
} satisfies Meta<typeof OnboardingSlide>

export default meta
type Story = StoryObj<typeof OnboardingSlide>

export const Default: Story = {
    args: {
        id: 0,
        index: 0,
        imageSource: require('./assets/onboarding-2.png'),
        heading: 'Welcome to MoneyBay app!',
        body: 'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
    }
}
