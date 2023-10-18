/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import SignUpTemplate from './SignUpTemplate'

const meta = {
	component: SignUpTemplate,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof SignUpTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
