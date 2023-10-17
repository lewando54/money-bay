/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import DashboardTemplate from './DashboardTemplate'

const meta = {
	component: DashboardTemplate,
	argTypes: {
        // To write
	}
} satisfies Meta<typeof DashboardTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
        // To write
	}
}
