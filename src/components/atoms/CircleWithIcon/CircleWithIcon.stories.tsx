/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import CircleWithIcon from './CircleWithIcon'

const meta: Meta<typeof CircleWithIcon> = {
    component: CircleWithIcon,
    argTypes: {
        backgroundColor: { control: 'object' },
        castShadow: { control: 'boolean' },
        onClick: {action: 'clicked', disable: true }
    }
}

export default meta
type Story = StoryObj<typeof CircleWithIcon>

export const Default: Story = {
    args: {
        backgroundColor: '#fff',
        onClick: null
    }
}

export const Pressable: Story = {}

export const CustomBackgroundColor: Story = {
    args: {
        backgroundColor: '#F00',
        onClick: null
    }
}

export const Gradient: Story = {
    args: {
        backgroundColor: ['#6B99CB', '#161966'],
        onClick: null
    }
}

export const CastShadow: Story = {
    args: {
        backgroundColor: '#fff',
        castShadow: true,
        onClick: null
    }
}
