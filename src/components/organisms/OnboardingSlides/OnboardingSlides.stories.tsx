/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import OnboardingSlides from './OnboardingSlides'

const meta = {
	component: OnboardingSlides,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof OnboardingSlides>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
