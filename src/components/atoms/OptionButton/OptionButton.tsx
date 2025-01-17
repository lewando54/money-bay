﻿import React from 'react'
import { TouchableOpacity } from 'react-native'

import { CustomText } from '@atoms'

import optionButtonStyle from './OptionButton.style'

import globalThemeStyle from '@styling/GlobalTheme.style'

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
            <CustomText
                style={[
                    optionButtonStyle.baseText,
                    variant == 'normal' && { fontFamily: 'MulishRegular' },
                    isChosen && optionButtonStyle.chosenText
                ]}
            >
                {text}
            </CustomText>
        </TouchableOpacity>
    )
}
