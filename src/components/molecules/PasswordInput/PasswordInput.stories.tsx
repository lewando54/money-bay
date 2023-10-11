/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'
import PasswordInput from './PasswordInput'
import React, { useState } from 'react'

interface IInputMockupProps {
    value?: string
    placeholder?: string
}

function StatefulInput({
    value='',
    placeholder='Type something',
}: IInputMockupProps){
    const [ textValue, setTextValue ] = useState(value)

    return (
        <PasswordInput 
            value={textValue}
            placeholder={placeholder}
            onChange={(newValue) => setTextValue(() => newValue)}
        />
    )
}

const meta = {
    component: StatefulInput,
    argTypes: {
        // To write
    }
} satisfies Meta<typeof StatefulInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        // To write
    }
}
