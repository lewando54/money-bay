/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useState } from 'react'
import { Meta,StoryObj } from '@storybook/react-native'

import CheckBoxSquare from './CheckBoxSquare'

import { GOOD_GREEN } from '@styling/GlobalTheme.style'

interface ICheckBoxSquareMockupProps {
    checked?: boolean
    borderColor?: string
    checkedColor?: string
    checkmarkColor?: string
    onPress?: () => void
}

function StatefulChceckbox({
    checked=false,
    borderColor='#868698',
    checkedColor=GOOD_GREEN,
    checkmarkColor='white',
    onPress,
}: ICheckBoxSquareMockupProps){
    const [checkedState, setCheckedState] = useState(checked)

    return (
        <CheckBoxSquare 
            checked={checkedState} 
            borderColor={borderColor}
            checkedColor={checkedColor}
            checkmarkColor={checkmarkColor}
            onPress={(newValue) => {onPress(); setCheckedState(() => newValue)}}
        />
    )
}

const meta = {
    component: StatefulChceckbox,
    argTypes: {
        checked: { control: 'boolean' },
        borderColor: { control: 'color' },
        checkedColor: { control: 'color' },
        checkmarkColor: { control: 'color' },
        onPress: { action: 'pressed' }
    }
} satisfies Meta<typeof StatefulChceckbox>

export default meta
type Story = StoryObj<typeof StatefulChceckbox>

export const Default: Story = {
    args: {
        checked: false,
        borderColor: '#868698',
        checkedColor: GOOD_GREEN,
        checkmarkColor: 'white',
    }
}

export const CustomColor: Story = {
    args: {
        checked: false,
        borderColor: 'magenta',
        checkedColor: 'black',
        checkmarkColor: 'red',
    }
}
