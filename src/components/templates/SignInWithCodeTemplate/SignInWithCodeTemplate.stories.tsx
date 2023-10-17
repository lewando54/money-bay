/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import SignInWithCodeTemplate from './SignInWithCodeTemplate'

const meta = {
	component: SignInWithCodeTemplate,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof SignInWithCodeTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
