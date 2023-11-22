import { Meta,StoryObj } from '@storybook/react-native'

import CustomText from './CustomText'

const meta = {
    component: CustomText,
    argTypes: {
        // To write
    }
} satisfies Meta<typeof CustomText>

export default meta
type Story = StoryObj<typeof CustomText>

export const Default: Story = {
    args: {
        // To write
    }
}
