/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useState } from 'react'
import { Meta,StoryObj } from '@storybook/react-native'

import Input from './Input'

interface IInputMockupProps {
    value?: string
    placeholder?: string
    isIconVisible?: boolean
    secureTextEntry?: boolean
    onIconPress?: () => void
}

function StatefulInput({
    value,
    placeholder='Type something',
    isIconVisible=false,
    secureTextEntry=false,
    onIconPress
}: IInputMockupProps){
    const [ textValue, setTextValue ] = useState(value)

    return (
        <Input 
            value={textValue}
            placeholder={placeholder}
            onChange={(newValue) => setTextValue(() => newValue)}
            isIconVisible={isIconVisible}
            secureTextEntry={secureTextEntry}
            onIconPress={onIconPress}
        />
    )
}

const meta = {
    component: StatefulInput,
    argTypes: {
        value: { control: 'text' },
        placeholder: { control: 'text' },
        isIconVisible: { control: 'boolean' },
        secureTextEntry: { control: 'boolean' },
        onIconPress: { action: 'iconPressed' }
    }
} satisfies Meta<typeof StatefulInput>

export default meta
type Story = StoryObj<typeof StatefulInput>

export const Default: Story = {
    args: {
        value: 'Initial value',
        placeholder: 'Type something'
    }
}

export const IconVisible: Story = {
    args: {
        value: 'Initial value',
        placeholder: 'Type something',
        isIconVisible: true
    }
}

export const SecureTextEntry: Story = {
    args: {
        value: 'Initial value',
        placeholder: 'Type something',
        secureTextEntry: true
    }
}
