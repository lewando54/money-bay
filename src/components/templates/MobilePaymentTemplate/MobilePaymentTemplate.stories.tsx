/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import MobilePaymentTemplate from './MobilePaymentTemplate'

const meta = {
    component: MobilePaymentTemplate,
    argTypes: {
        balance: {control: 'number'},
        currency: {control: 'object'},
        phoneValue: {control: 'text'},
        wholeValue: {control: 'text'},
        decimalValue: {control: 'text'},
        onSubmit: {action: 'Submitted'},
    }
} satisfies Meta<typeof MobilePaymentTemplate>

export default meta
type Story = StoryObj<typeof MobilePaymentTemplate>

export const Default: Story = {
    args: {
        balance: 4863.27,
        currency: {iso: 'usd', symbol: '$', left: true},
    }
}
