/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import MoneyText from './MoneyText'

const meta = {
    component: MoneyText,
    argTypes: {
        // To write
    }
} satisfies Meta<typeof MoneyText>

export default meta
type Story = StoryObj<typeof MoneyText>

export const Default: Story = {
    args: {
        // To write
    }
}
