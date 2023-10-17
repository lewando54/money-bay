/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import SignInTemplate from './SignInTemplate'

const meta = {
	component: SignInTemplate,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof SignInTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
