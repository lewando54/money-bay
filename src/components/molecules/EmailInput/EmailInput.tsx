import React, { useState } from 'react'
import { StyleProp, TextStyle,ViewStyle } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { z } from 'zod'

import { Input } from '@atoms'

import { globalColors } from '@styling/GlobalTheme.style'

interface IEmailInputProps{
    value?: string
    placeholder?: string
    containerStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    onChange?: (newValue: string) => void
    testID?: string
}

export default function EmailInput({
    value,
    placeholder='Email',
    containerStyle,
    textStyle,
    onChange,
    testID
}: IEmailInputProps){
    const [ isValid, setIsValid ] = useState(false)
    const emailSchema = z.string().email()

    const handleOnChange = (newValue: string) => {
        if(onChange){
            onChange(newValue)
        }

        try{
            emailSchema.parse(newValue)
            setIsValid(() => true)
        }
        catch(err){
            setIsValid(() => false)
        }
    }

    return (
        <Input 
            value={value} 
            placeholder={placeholder}
            textStyle={textStyle}
            containerStyle={containerStyle}
            testID={testID}
            onChange={handleOnChange} 
            icon={<Feather name="check" size={14} color={globalColors.MAIN_DARK} />} 
            isIconVisible={isValid}
        />
    )
}
