/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import ButtonCircleWithText from './ButtonCircleWithText'

const meta = {
	component: ButtonCircleWithText,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof ButtonCircleWithText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
