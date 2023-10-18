/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import TransactionList from './TransactionList'

const meta = {
	component: TransactionList,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof TransactionList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
