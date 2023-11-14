/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { useState } from 'react'
import React from 'react'
import { Meta,StoryObj } from '@storybook/react-native'

import Checkbox from './Checkbox'

import { GOOD_GREEN } from '@styling/GlobalTheme.style'

interface IMockupCheckboxProps {
	checked?: boolean
    checkedbackgroundColor?: string
    circleBackgroundColor?: string
    backgroundColor?: string
}

function StatefulCheckbox({
    checked,
    checkedbackgroundColor,
    circleBackgroundColor,
    backgroundColor
}: IMockupCheckboxProps) {
    const [checkedState, setCheckedState] = useState(checked)

    return (
        <Checkbox 
            checked={checkedState} 
            testID='test'
            backgroundColor={backgroundColor}
            circleBackgroundColor={circleBackgroundColor}
            checkedbackgroundColor={checkedbackgroundColor}
            onPress={(newValue) => {setCheckedState(newValue)}}
        />
    )
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    component: StatefulCheckbox,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        checked: { control: 'boolean' },
        checkedbackgroundColor: { control: 'color' },
        circleBackgroundColor: { control: 'color' },
        backgroundColor: { control: 'color' },
    }
} satisfies Meta<typeof StatefulCheckbox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta
type Story = StoryObj<typeof StatefulCheckbox>

export const Default: Story = {
    args: {
        checked: false,
        checkedbackgroundColor: GOOD_GREEN,
        circleBackgroundColor: 'white',
        backgroundColor: '#CED6E1',
    }
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args
