/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import CircleWithIcon from './CircleWithIcon'

const meta = {
	component: CircleWithIcon,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof CircleWithIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
