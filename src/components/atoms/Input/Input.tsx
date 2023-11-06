import React, { useState } from 'react'
import { KeyboardTypeOptions,Pressable, StyleProp, TextInput, TextStyle, ViewStyle } from 'react-native'
import { Feather } from '@expo/vector-icons'

import UniversalContainer from '../UniversalContainer/UniversalContainer'

import globalThemeStyle, { MAIN_DARK } from '../../../styling/GlobalTheme.style'
import inputStyle from './Input.style'

interface IInputProps {
    value?: string
    placeholder?: string
    containerStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    isIconVisible?: boolean
    secureTextEntry?: boolean
    keyboardType?: KeyboardTypeOptions
    icon?: React.ReactNode
    ref?: React.RefObject<TextInput>
    onChange?: (newValue: string) => void
    onIconPress?: () => void
    testID?: string
}

export default function Input({
    value,
    placeholder='Type something',
    containerStyle,
    textStyle,
    isIconVisible=false,
    secureTextEntry=false,
    keyboardType='default',
    icon=<Feather name="eye-off" size={16} color={MAIN_DARK} testID='icon'/>,
    onChange,
    onIconPress,
    testID
}: IInputProps){
    const [isFocused, setIsFocused] = useState(false)

    const onFocus = () => {
        setIsFocused((prev) => !prev)
    }

    const onBlurred = () => {
        setIsFocused((prev) => !prev)
    }

    const handleOnChange = (newValue: string) => {
        if(onChange){
            onChange(newValue)
        }
    }

    return (
        <UniversalContainer 
            style={[
                inputStyle.container, 
                containerStyle,
                isFocused && inputStyle.focused
            ]} 
            castShadow={true}>
            <TextInput 
                value={value}
                placeholder={placeholder}
                onChangeText={handleOnChange}
                onFocus={onFocus}
                onBlur={onBlurred}
                testID={testID}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={'#868698'}
                keyboardType={keyboardType}
                style={[
                    globalThemeStyle.text_Regular,
                    inputStyle.text, 
                    textStyle, 
                    !isIconVisible && {maxWidth: '100%'}
                ]} 
            />
            <Pressable testID='input-icon' onPress={onIconPress} style={!isIconVisible && {display: 'none'}} hitSlop={10}>{icon}</Pressable>
        </UniversalContainer>
    )
}
