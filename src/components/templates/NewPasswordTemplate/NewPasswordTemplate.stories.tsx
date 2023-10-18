/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import NewPasswordTemplate from './NewPasswordTemplate'

const meta = {
	component: NewPasswordTemplate,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof NewPasswordTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
