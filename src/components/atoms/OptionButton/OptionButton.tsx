import React from 'react'
import { Text,TouchableOpacity } from 'react-native'

import globalThemeStyle from '../../../styling/GlobalTheme.style'
import optionButtonStyle from './OptionButton.style'

type TOptionButtonVariant = 'large' | 'normal'

interface IOptionButtonProps {
    variant?: TOptionButtonVariant
    text?: string
    isChosen?: boolean
    onClick?: () => void
    testID?: string
}

export default function OptionButton({
    variant='large',
    text='USD',
    isChosen=false,
    onClick,
    testID
}: IOptionButtonProps){
    return (
        <TouchableOpacity
            onPress={onClick} 
            style={[
                optionButtonStyle.baseStyle,
                globalThemeStyle.default_Shadow,
                isChosen && optionButtonStyle.chosenStyle
            ]}
            testID={testID}
        >
            <Text
                style={[
                    optionButtonStyle.baseText,
                    variant == 'normal' && { fontFamily: 'MulishRegular' },
                    isChosen && optionButtonStyle.chosenText
                ]}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}
