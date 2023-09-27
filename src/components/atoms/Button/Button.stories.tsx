/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import Button from './Button'

const meta = {
	component: Button,
	argTypes: {
		color: { control: 'select', options: ['primary', 'secondary'] },
		onClick: { action: 'clicked' }
	}
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		color: 'primary',
		children: 'Button'
	}
}

export const Secondary: Story = {
	args: {
		color: 'secondary',
		children: 'Button'
	}
}