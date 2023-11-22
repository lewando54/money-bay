/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { Meta,StoryObj } from '@storybook/react-native'

import { CustomText } from '@atoms'

import InfoScreenTemplate from './InfoScreenTemplate'

import { globalColors } from '@styling/GlobalTheme.style'

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
        icon: <CustomText>Icon</CustomText>,
        title: 'Account created!',
        titleColor: globalColors.MAIN_DARK,
        body: <CustomText>Test</CustomText>,
    }
}

export const AdditionalButtons: Story = {
    args: {
        icon: <CustomText>Icon</CustomText>,
        title: 'Account created!',
        titleColor: globalColors.MAIN_DARK,
        body: <CustomText>Test</CustomText>,
        additionalButtons: [
            {
                children: 'Send Receipt',
                color: 'secondary',
            }
        ]
    }
}
