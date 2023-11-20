/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useState } from 'react'
import { Meta,StoryObj } from '@storybook/react-native'

import PhoneInput from './PhoneInput'

interface IPhoneInputMockupProps {
    value?: string
}

function StatefulPhoneInput({value}: IPhoneInputMockupProps){
    const [mockupValue, setMockupValue] = useState(value)
    return (
        <PhoneInput value={mockupValue} onChange={(newValue) => setMockupValue(() => newValue)}/>
    )
}

const meta = {
    component: StatefulPhoneInput,
    argTypes: {
        value: {control: 'text'}
    }
} satisfies Meta<typeof StatefulPhoneInput>

export default meta
type Story = StoryObj<typeof StatefulPhoneInput>

export const Default: Story = {
    args: {
        value: '123456789'
    }
}
