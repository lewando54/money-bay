﻿import React from 'react'
import { StyleProp, TextStyle,ViewStyle } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Input } from '@atoms'

import { MAIN_DARK } from '@styling/GlobalTheme.style'

interface ISearchInputProps {
    value?: string
    placeholder?: string
    containerStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    onChange?: (newValue: string) => void
    onIconPress?: () => void
    testID?: string
}

export default function SearchInput({
    value,
    placeholder='Search',
    containerStyle,
    textStyle,
    onChange,
    onIconPress,
    testID
}: ISearchInputProps){
    return (
        <Input 
            value={value}
            placeholder={placeholder}
            containerStyle={containerStyle}
            textStyle={textStyle}
            icon={<Feather name="search" size={16} color={MAIN_DARK} />}
            isIconVisible={true}
            onChange={onChange}
            onIconPress={onIconPress}
            testID={testID}
        />
    )
}
