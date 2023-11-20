/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import PinDots from './PinDots'

const meta = {
    component: PinDots,
    argTypes: {
        maxLength: {control: 'number'},
        currLength: {control: 'number'},
    }
} satisfies Meta<typeof PinDots>

export default meta
type Story = StoryObj<typeof PinDots>

export const Default: Story = {
    args: {
        maxLength: 4,
        currLength: 0,
    }
}
