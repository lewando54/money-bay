/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import EmailInput from './EmailInput'

const meta = {
	component: EmailInput,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof EmailInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
