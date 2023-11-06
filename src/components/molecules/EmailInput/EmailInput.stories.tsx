﻿/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import EmailInput from './EmailInput'

const meta = {
    component: EmailInput,
    argTypes: {
        // To write
    }
} satisfies Meta<typeof EmailInput>

export default meta
type Story = StoryObj<typeof EmailInput>

export const Default: Story = {
    args: {
        // To write
    }
}
