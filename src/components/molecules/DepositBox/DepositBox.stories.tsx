import { Meta,StoryObj } from '@storybook/react-native'

import DepositBox from './DepositBox'

const meta = {
    component: DepositBox,
    argTypes: {
        currentAmount: { control: 'number' },
        currency: { control: 'object' },
        dateFrom: { control: 'date' },
        dateTo: { control: 'date' },
        isFinished: { control: 'boolean' },
        percent: { control: 'number' },
        interest: { control: 'number' },
        onTopUpClick: { action: 'topped-up' },
        onWithdrawalClick: { action: 'withdrawal' },
        onExtendClick: { action: 'extended' }
    }
} satisfies Meta<typeof DepositBox>

export default meta
type Story = StoryObj<typeof DepositBox>

export const Default: Story = {
    args: {
        currentAmount: 3000,
        currency: {iso: 'usd', symbol: '$', left: true},
        dateFrom: new Date('2022-09-01'),
        dateTo: new Date('2022-10-01'),
        isFinished: false,
        percent: 8,
        interest: 60.57
    }
}
