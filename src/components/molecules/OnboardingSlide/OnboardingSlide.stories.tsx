/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import OnboardingSlide from './OnboardingSlide'

const meta = {
    component: OnboardingSlide,
    argTypes: {
        // To write
    }
} satisfies Meta<typeof OnboardingSlide>

export default meta
type Story = StoryObj<typeof OnboardingSlide>

export const Default: Story = {
    args: {
        // To write
    }
}
