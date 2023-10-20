/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import MoneyBox from './MoneyBox'

const meta = {
    component: MoneyBox,
    argTypes: {
        name: { control: 'text' },
        goalAmount: { control: 'number' },
        currentAmount: { control: 'number' },
        currency: { control: 'object' },
        onTopUpClick: { action: 'topped-up' },
        onWithdrawalClick: { action: 'withdrawal' }
    }
} satisfies Meta<typeof MoneyBox>

export default meta
type Story = StoryObj<typeof MoneyBox>

export const Default: Story = {
    args: {
        goalAmount: 1200,
        currentAmount: 650.27,
        name: 'New iPhone Pro Max',
        currency: {iso: 'usd', symbol: '$', left: true},
    }
}
