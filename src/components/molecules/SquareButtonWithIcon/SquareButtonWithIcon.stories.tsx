/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import SquareButtonWithIcon from './SquareButtonWithIcon'

const meta = {
    component: SquareButtonWithIcon,
    argTypes: {
        text: { control: 'text' },
        onclick: { action: 'clicked' },
        buttonBackgroundColor: { control: 'color' },
        circleBackgroundColor: { control: 'object' },
    }
} satisfies Meta<typeof SquareButtonWithIcon>

export default meta
type Story = StoryObj<typeof SquareButtonWithIcon>

export const Default: Story = {
    args: {
        text: 'Add new card',
        buttonBackgroundColor: '#fff',
        circleBackgroundColor: '#3EB290'
    }
}

export const Gradient: Story = {
    args: {
        text: 'Add new card',
        buttonBackgroundColor: '#fff',
        circleBackgroundColor: ['#3EB290', '#ff0']
    }
}
