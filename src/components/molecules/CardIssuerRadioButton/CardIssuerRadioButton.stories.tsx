import { StoryObj, Meta } from '@storybook/react-native'
import React from 'react'
import CardIssuerRadioButton from './CardIssuerRadioButton'
import { GOOD_GREEN } from '../../../styling/GlobalTheme.style'
import { useState } from 'react'
import { TCardIssuer } from '../../../utils/cardIssuers'

interface ICardIssuerRadioButtonMockupProps {
	cardIssuer: TCardIssuer
	chosen: boolean
    color?: string
	onPress: () => void
}

function StatefulCardIssuerRadioButton({
    cardIssuer='visa-color',
    chosen=false,
    color=GOOD_GREEN,
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
        color: GOOD_GREEN
    }
}

export const Mastercard: Story = {
    args: {
        cardIssuer: 'mastercard',
        chosen: false,
        color: GOOD_GREEN
    }
}

export const Chosen: Story = {
    args: {
        cardIssuer: 'visa-color',
        chosen: true,
        color: GOOD_GREEN
    }
}

export const ChosenCustomColor: Story = {
    args: {
        cardIssuer: 'visa-color',
        chosen: true,
        color: '#f00'
    }
}

