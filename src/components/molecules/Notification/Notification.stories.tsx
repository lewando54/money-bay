/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import Notification from './Notification'

const meta = {
	component: Notification,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof Notification>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
