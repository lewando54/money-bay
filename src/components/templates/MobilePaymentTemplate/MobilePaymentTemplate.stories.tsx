/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import MobilePaymentTemplate from './MobilePaymentTemplate'

const meta = {
	component: MobilePaymentTemplate,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof MobilePaymentTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
