/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import Button from './Button'

import { globalColors } from '@styling/GlobalTheme.style'

const meta = {
    component: Button,
    argTypes: {
        color: { control: 'select', options: ['primary', 'secondary'] },
        size: { control: 'select', options: ['normal', 'small'] }
    }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        color: 'primary',
        size: 'normal',
        children: 'Button'
    }
}

export const Secondary: Story = {
    args: {
        color: 'secondary',
        size: 'normal',
        children: 'Button'
    }
}

export const Small: Story = {
    args: {
        color: globalColors.GOOD_GREEN,
        size: 'small',
        children: 'Button'
    }
}