/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import ButtonCircleWithText from './ButtonCircleWithText'

const meta = {
	component: ButtonCircleWithText,
	argTypes: {
		circleBackgroundColor: { control: 'object' },
		text: { control: 'text' },
	}
} satisfies Meta<typeof ButtonCircleWithText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		circleBackgroundColor: '#3EB290',
		text: 'Top-Up Payment'
	}
}

export const Gradient: Story = {
	args: {
		circleBackgroundColor: ['#3EB290', '#ff0'],
		text: 'Top-Up Payment'
	}
}
