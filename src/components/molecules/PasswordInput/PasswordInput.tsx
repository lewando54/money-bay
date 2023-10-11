import React, { useState } from 'react'
import Input from '../../atoms/Input/Input'
import { Feather } from '@expo/vector-icons'
import { StyleProp, ViewStyle, TextStyle } from 'react-native'
import { MAIN_DARK } from '../../../styling/GlobalTheme.style'

interface IPasswordInputProps {
    value?: string
    placeholder?: string
    containerStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    onChange?: (newValue: string) => void
    testID?: string
}

export default function PasswordInput({
    value='',
    placeholder='Type something',
    containerStyle,
    textStyle,
    onChange,
    testID='passwordtest'
}: IPasswordInputProps){
    const [ isPasswordVisible, setIsPasswordVisible ] = useState(false)
    const EyeIcon = 
    isPasswordVisible ? 
        <Feather name="eye" size={16} color={MAIN_DARK} testID='eye'/> 
        : <Feather name="eye-off" size={16} color={MAIN_DARK} testID='eye-off'/>

    const iconPressHandle = () => {
        setIsPasswordVisible((prev) => !prev)
    }

    return (
        <Input 
            value={value} 
            placeholder={placeholder}
            textStyle={textStyle}
            containerStyle={containerStyle}
            testID={testID}
            onChange={onChange} 
            icon={EyeIcon} 
            onIconPress={iconPressHandle}
            secureTextEntry={!isPasswordVisible}
            isIconVisible={value.length > 0}
        />
    )
}
