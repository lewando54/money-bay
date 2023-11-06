/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import MiniCreditCard from './MiniCreditCard'

const meta = {
    component: MiniCreditCard,
    argTypes: {
        cardIssuer: { control: 'select', options: ['visa', 'mastercard'] },
        gradientColors: { control: 'object' }
    }
} satisfies Meta<typeof MiniCreditCard>

export default meta
type Story = StoryObj<typeof MiniCreditCard>

export const Visa: Story = {
    args: {
        cardIssuer: 'visa'
    }
}

export const Mastercard: Story = {
    args: {
        cardIssuer: 'mastercard',
    }
}

export const CustomGradientColors: Story = {
    args: {
        cardIssuer: 'visa',
        gradientColors: ['#f00', '#ff0']
    }
}