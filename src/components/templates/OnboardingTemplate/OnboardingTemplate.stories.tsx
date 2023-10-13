/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import OnboardingTemplate from './OnboardingTemplate'

const meta = {
	component: OnboardingTemplate,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof OnboardingTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
