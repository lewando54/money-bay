/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import OptionButton from './OptionButton'

const meta = {
    component: OptionButton,
    argTypes: {
        variant: { control: 'select', options: ['normal', 'large']},
        text: { control: 'text' },
        isChosen: { control: 'boolean' },
        onClick: { action: 'chosen' }
    }
} satisfies Meta<typeof OptionButton>

export default meta
type Story = StoryObj<typeof OptionButton>

export const Default: Story = {
    args: {
        variant: 'large',
        text: 'USD',
        isChosen: false
    }
}

export const Normal: Story = {
    args: {
        variant: 'normal',
        text: 'USD',
        isChosen: false
    }
}

export const Chosen: Story = {
    args: {
        variant: 'large',
        text: 'USD',
        isChosen: true
    }
}
