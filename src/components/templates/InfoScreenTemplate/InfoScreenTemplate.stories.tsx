/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import InfoScreenTemplate from './InfoScreenTemplate'

const meta = {
	component: InfoScreenTemplate,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof InfoScreenTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
