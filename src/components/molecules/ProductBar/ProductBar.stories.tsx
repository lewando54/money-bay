/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import ProductBar from './ProductBar'

const meta = {
    component: ProductBar,
    argTypes: {
        product: { control: 'text' },
        name: { control: 'text' },
        balance: { control: 'number' },
        balanceTextColor: { control: 'text' },
        cardIssuer: { control: 'select', options: ['visa', 'mastercard'] },
        currency: { control: 'object' },
        hasMenuButton: { control: 'boolean' }, 
        onMenuClick: { action: 'clickedOnMenu' }
    }
} satisfies Meta<typeof ProductBar>

export default meta
type Story = StoryObj<typeof ProductBar>

export const DefaultCard: Story = {
    args: {
        product: 'card',
        name: '**** **** **** 7895',
        balance: 2500,
        cardIssuer: 'visa',
        currency: {iso: 'usd', symbol: '$', left: true},
        hasMenuButton: false
    }
}

export const DefaultAccount: Story = {
    args: {
        product: 'account',
        name: 'US**********************4571',
        balance: 39863.62,
        cardIssuer: 'visa',
        currency: {iso: 'usd', symbol: '$', left: true},
        hasMenuButton: false
    }
}

export const CustomBalanceColor: Story = {
    args: {
        product: 'card',
        name: '**** **** **** 7895',
        balance: 2500,
        balanceTextColor: '#FF5887',
        cardIssuer: 'visa',
        currency: {iso: 'usd', symbol: '$', left: true},
        hasMenuButton: false
    }
}

export const HasMenuButton: Story = {
    args: {
        product: 'card',
        name: '**** **** **** 7895',
        balance: 2500,
        cardIssuer: 'visa',
        currency: {iso: 'usd', symbol: '$', left: true},
        hasMenuButton: true
    }
}
