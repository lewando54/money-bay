﻿import React from 'react'
import { useState } from 'react'
import { Meta,StoryObj } from '@storybook/react-native'

import { TCardIssuer } from '@utils/cardIssuers'

import CardIssuerRadioButton from './CardIssuerRadioButton'

import { globalColors } from '@styling/GlobalTheme.style'

interface ICardIssuerRadioButtonMockupProps {
	cardIssuer: TCardIssuer
	chosen: boolean
    color?: string
	onPress: () => void
}

function StatefulCardIssuerRadioButton({
    cardIssuer='visa-color',
    chosen=false,
    color=globalColors.GOOD_GREEN,
    onPress
}: ICardIssuerRadioButtonMockupProps){
    const [isChosen, setIsChosen] = useState(chosen)

    return (
        <CardIssuerRadioButton cardIssuer={cardIssuer} chosen={isChosen} color={color} onPress={(id, group, chosen) => {setIsChosen(!chosen); onPress()}}/>
    )
}

const meta = {
    component: StatefulCardIssuerRadioButton,
    argTypes: {
        cardIssuer: { control: 'select', options: [ 'mastercard', 'visa-color' ]},
        chosen: { control: 'boolean' },
        color: { control: 'color' },
        onPress: { action: 'Pressed' }
    }
} satisfies Meta<typeof StatefulCardIssuerRadioButton>

export default meta
type Story = StoryObj<typeof StatefulCardIssuerRadioButton>

export const Default: Story = {
    args: {
        cardIssuer: 'visa-color',
        chosen: false,
        color: globalColors.GOOD_GREEN
    }
}

export const Mastercard: Story = {
    args: {
        cardIssuer: 'mastercard',
        chosen: false,
        color: globalColors.GOOD_GREEN
    }
}

export const Chosen: Story = {
    args: {
        cardIssuer: 'visa-color',
        chosen: true,
        color: globalColors.GOOD_GREEN
    }
}

export const ChosenCustomColor: Story = {
    args: {
        cardIssuer: 'visa-color',
        chosen: true,
        color: '#f00'
    }
}

