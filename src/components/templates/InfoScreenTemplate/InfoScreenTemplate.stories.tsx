/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { Text } from 'react-native'
import { Meta,StoryObj } from '@storybook/react-native'

import InfoScreenTemplate from './InfoScreenTemplate'

import { MAIN_DARK } from '@styling/GlobalTheme.style'

const meta = {
    component: InfoScreenTemplate,
    argTypes: {
        icon: {control: 'object'},
        title: {control: 'text'},
        titleColor: {control: 'color'},
        body: {control: 'object'},
        additionalButtons: {control: 'object'},
        onSubmit: {action: 'Pressed'}
    }
} satisfies Meta<typeof InfoScreenTemplate>

export default meta
type Story = StoryObj<typeof InfoScreenTemplate>

export const Default: Story = {
    args: {
        icon: <Text>Icon</Text>,
        title: 'Account created!',
        titleColor: MAIN_DARK,
        body: <Text>Test</Text>,
    }
}

export const AdditionalButtons: Story = {
    args: {
        icon: <Text>Icon</Text>,
        title: 'Account created!',
        titleColor: MAIN_DARK,
        body: <Text>Test</Text>,
        additionalButtons: [
            {
                children: 'Send Receipt',
                color: 'secondary',
            }
        ]
    }
}
