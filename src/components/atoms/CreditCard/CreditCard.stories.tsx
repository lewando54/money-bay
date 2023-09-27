/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import CreditCard from './CreditCard'

const meta = {
	component: CreditCard,
	argTypes: {
		cardIssuer: { control: 'select', options: ['visa', 'mastercard'] },
        cardName: {control: 'text'},
        cardNumber: {control: 'text'},
        cardExpiryDate: { control: 'date' },
        cardBalance: { control: 'number' },
        cardCurrency: { control: 'object' }
	}
} satisfies Meta<typeof CreditCard>

export default meta
type Story = StoryObj<typeof meta>

export const Visa: Story = {
	args: {
		cardIssuer: 'visa',
        cardName: 'bay platinum',
        cardNumber: '1234 **** **** 1234',
        cardExpiryDate: new Date('2023-12-19'),
        cardBalance: 4863.27,
        cardCurrency: {iso: 'usd', symbol: '$', left: true}
	}
}

export const Mastercard: Story = {
	args: {
		cardIssuer: 'mastercard',
        cardName: 'bay platinum',
        cardNumber: '1234 **** **** 1234',
        cardExpiryDate: new Date('2023-12-19'),
        cardBalance: 4863.27,
        cardCurrency: {iso: 'usd', symbol: '$', left: true}
	}
}

export const CurrencyLeft: Story = {
	args: {
		cardIssuer: 'mastercard',
        cardName: 'bay platinum',
        cardNumber: '1234 **** **** 1234',
        cardExpiryDate: new Date('2023-12-19'),
        cardBalance: 4863.27,
        cardCurrency: {iso: 'usd', symbol: '$', left: true}
	}
}

export const CurrencyRight: Story = {
	args: {
		cardIssuer: 'mastercard',
        cardName: 'bay platinum',
        cardNumber: '1234 **** **** 1234',
        cardExpiryDate: new Date('2023-12-19'),
        cardBalance: 4863.27,
        cardCurrency: {iso: 'pln', symbol: 'zł', left: false}
	}
}