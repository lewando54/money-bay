﻿/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import PinDots from './PinDots'

const meta = {
    component: PinDots,
    argTypes: {
        // To write
    }
} satisfies Meta<typeof PinDots>

export default meta
type Story = StoryObj<typeof PinDots>

export const Default: Story = {
    args: {
        // To write
    }
}
