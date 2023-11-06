/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import TransactionBar from './TransactionBar'

const meta = {
    component: TransactionBar,
    argTypes: {
        title: { control: 'text' },
        subTitle: { control: 'text' },
        amount: { control: 'number' },
        percent: { control: 'number' },
        isExpense: { control: 'boolean' }
    }
} satisfies Meta<typeof TransactionBar>

export default meta
type Story = StoryObj<typeof TransactionBar>

export const Default: Story = {
    args: {
        title: 'Adalyn Roth',
        subTitle: 'Money transfer',
        amount: 140.00,
        percent: 20,
        isExpense: true
    }
}

export const WithoutPercentSign: Story = {
    args: {
        title: 'Adalyn Roth',
        subTitle: 'Money transfer',
        amount: 140.00,
        isExpense: true
    }
}

export const IsAnIncome: Story = {
    args: {
        title: 'Adalyn Roth',
        subTitle: 'Money transfer',
        amount: 140.00,
        isExpense: false
    }
}
