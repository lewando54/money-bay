/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import PhoneInput from './PhoneInput'

const meta = {
    component: PhoneInput,
    argTypes: {
        // To write
    }
} satisfies Meta<typeof PhoneInput>

export default meta
type Story = StoryObj<typeof PhoneInput>

export const Default: Story = {
    args: {
        // To write
    }
}
