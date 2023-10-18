/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import TransactionHistory from './TransactionHistoryTemplate'

const meta = {
	component: TransactionHistory,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof TransactionHistory>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
