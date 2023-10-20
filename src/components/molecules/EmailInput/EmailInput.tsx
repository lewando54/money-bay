import React, { useState } from 'react'
import { MAIN_DARK } from '../../../styling/GlobalTheme.style'
import Input from '../../atoms/Input/Input'
import { Feather } from '@expo/vector-icons'
import { StyleProp, ViewStyle, TextStyle } from 'react-native'

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

    const handleOnChange = (newValue: string) => {
        if(onChange){
            onChange(newValue)
        }

        // eslint-disable-next-line no-control-regex
        if(newValue.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)){
            setIsValid(() => true)
        }
        else{
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
            icon={<Feather name="check" size={14} color={MAIN_DARK} />} 
            isIconVisible={isValid}
        />
    )
}
