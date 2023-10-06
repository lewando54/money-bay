/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import LoanBox from './LoanBox'

const meta = {
    component: LoanBox,
    argTypes: {
        amount: { control: 'number' },
        rate: { control: 'number' },
        period: { control: 'number' },
        monthlyPayment: { control: 'number' },
        totalPaid: { control: 'number' },
        currency: { control: 'object' },
        onPress: { action: 'clicked' }
    }
} satisfies Meta<typeof LoanBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        amount: -20532,
        rate: 13,
        period: 24,
        monthlyPayment: 1117,
        totalPaid: 4468,
        currency: {iso: 'usd', symbol: '$', left: true},
    }
}

export const OneMonth: Story = {
    args: {
        amount: -20532,
        rate: 13,
        period: 1,
        monthlyPayment: 1117,
        totalPaid: 4468,
        currency: {iso: 'usd', symbol: '$', left: true},
    }
}
