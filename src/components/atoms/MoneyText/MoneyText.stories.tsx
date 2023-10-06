/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import MoneyText from './MoneyText'

const meta = {
	component: MoneyText,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof MoneyText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
