import React, { useState } from 'react'
import { StyleProp, TextInput, TextStyle, ViewStyle, View, Pressable } from 'react-native'
import inputStyle from './Input.style'
import UniversalContainer from '../UniversalContainer/UniversalContainer'
import { Feather } from '@expo/vector-icons'
import { MAIN_DARK } from '../../../styling/GlobalTheme.style'

interface IInputProps {
    value?: string
    placeholder?: string
    containerStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    isIconVisible?: boolean
    secureTextEntry?: boolean
    icon?: React.ReactNode
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
    icon=<Feather name="eye-off" size={16} color={MAIN_DARK} />,
    onChange,
    onIconPress,
    testID
}: IInputProps){
    const PressableIcon = isIconVisible && <Pressable onPress={onIconPress}>{icon}</Pressable>
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
            padding={14} 
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
                style={[
                    inputStyle.text, 
                    textStyle, 
                    !isIconVisible && {maxWidth: '100%'}
                ]} 
            />
            {PressableIcon}
        </UniversalContainer>
    )
}
