/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import Dot from './Dot'

const meta = {
	component: Dot,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof Dot>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
