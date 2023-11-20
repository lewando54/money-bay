/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useState } from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { Meta,StoryObj } from '@storybook/react-native'

import SearchInput from './SearchInput'

interface ISearchInputMockupProps {
    value?: string
    placeholder?: string
    containerStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    onIconPress?: () => void
}

function StatefulSearchInput({
    value,
    placeholder='Search',
    containerStyle,
    textStyle,
    onIconPress,
}: ISearchInputMockupProps){
    const [svalue, setsvalue] = useState(value)

    return (
        <SearchInput 
            value={svalue}
            placeholder={placeholder}
            containerStyle={containerStyle}
            textStyle={textStyle}
            onIconPress={onIconPress}
            onChange={(newValue) => setsvalue(() => newValue)}
        />
    )
}

const meta = {
    component: StatefulSearchInput,
    argTypes: {
        value: {control: 'text'},
        placeholder: {control: 'text'},
        containerStyle: {control: 'object'},
        textStyle: {control: 'object'},
        onIconPress: {action: 'iconPressed'}
    }
} satisfies Meta<typeof StatefulSearchInput>

export default meta
type Story = StoryObj<typeof StatefulSearchInput>

export const Default: Story = {
    args: {
        value: 'Example input',
        placeholder: 'Search',
    }
}

export const CustomStyles: Story = {
    args: {
        value: 'Example input',
        placeholder: 'Search',
        textStyle: {color: 'red'},
        containerStyle: {backgroundColor: 'blue'}
    }
}
