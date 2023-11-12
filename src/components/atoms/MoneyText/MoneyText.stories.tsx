/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import MoneyText from './MoneyText'

const meta = {
    component: MoneyText,
    argTypes: {
        amount: {control: 'number'},
        currency: {control: 'object'},
        hasNumberFormatting: {control: 'boolean'},
        isCurrencyBold: {control: 'boolean'},
        fontSize: {control: 'number'},
        containerStyle: {control: 'object'}
    }
} satisfies Meta<typeof MoneyText>

export default meta
type Story = StoryObj<typeof MoneyText>

export const Default: Story = {
    args: {
        amount: 1234.12,
        currency: {iso: 'usd', symbol: '$', left: true},
        hasNumberFormatting: true,
        isCurrencyBold: false,
        fontSize: 16
    }
}

export const DifferentContainerStyle: Story = {
    args: {
        amount: 1234.12,
        currency: {iso: 'usd', symbol: '$', left: true},
        hasNumberFormatting: true,
        isCurrencyBold: false,
        fontSize: 16,
        containerStyle: {backgroundColor: 'red', padding: 10}
    }
}
