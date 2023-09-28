/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import SquareButtonWithIcon from './SquareButtonWithIcon'

const meta = {
	component: SquareButtonWithIcon,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof SquareButtonWithIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
