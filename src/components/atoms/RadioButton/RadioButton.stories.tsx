﻿/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { useState } from 'react'
import React from 'react'
import { Meta,StoryObj } from '@storybook/react-native'

import RadioButton from './RadioButton'

import { globalColors } from '@styling/GlobalTheme.style'


interface IRadioButtonMockupProps {
    chosen: boolean
    color?: string
	onPress: () => void
}

function StatefulRadioButton({
    chosen=false,
    color=globalColors.GOOD_GREEN,
    onPress
}: IRadioButtonMockupProps){
    const [isChosen, setIsChosen] = useState(chosen)

    return (
        <RadioButton chosen={isChosen} color={color} onPress={(id, group, chosenArg) => {setIsChosen(!chosenArg); onPress()}}/>
    )
}

const meta = {
    component: StatefulRadioButton,
    argTypes: {
        chosen: { control: 'boolean' },
        color: { control: 'color' },
        onPress: { action: 'Pressed' }
    }
} satisfies Meta<typeof StatefulRadioButton>

export default meta
type Story = StoryObj<typeof StatefulRadioButton>

export const Default: Story = {
    args: {
        chosen: false,
        color: globalColors.GOOD_GREEN
    }
}

export const Chosen: Story = {
    args: {
        chosen: true,
        color: globalColors.GOOD_GREEN
    }
}

export const ChosenCustomColor: Story = {
    args: {
        chosen: true,
        color: '#f00'
    }
}
