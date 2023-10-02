/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import Notification from './Notification'

const meta = {
	component: Notification,
	argTypes: {
		type: { control: 'select', options: ['error', 'warning', 'correct'] },
		title: { control: 'text' },
		body: { control: 'text' },
		datetime: { control: 'date' }
	}
} satisfies Meta<typeof Notification>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		type: 'correct',
		title: 'Your loan application has been approved!',
		body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		datetime: new Date('2022-09-12T12:32:12')
	}
}
