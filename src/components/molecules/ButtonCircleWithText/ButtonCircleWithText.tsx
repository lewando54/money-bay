import React from 'react'
import { Dimensions,Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { CircleWithIcon } from '@atoms'

import buttonCircleWithTextStyle from './ButtonCircleWithText.style'

import GlobalThemeStyle from '@styling/GlobalTheme.style'

interface IButtonCircleWithTextProps {
    circleBackgroundColor?: string
    icon?: React.ReactNode
    text?: string
    onClick?: () => void
    testID?: string
}

export default function ButtonCircleWithText({
    circleBackgroundColor='#3EB290',
    icon=<AntDesign size={24} name={'creditcard'} color={'#fff'}/>,
    text='Top-Up Payment',
    onClick,
    testID='square-button-with-icon'
}: IButtonCircleWithTextProps){
    const { width } = Dimensions.get('screen')

    return (
        <TouchableOpacity onPress={onClick} testID={testID} style={buttonCircleWithTextStyle.container}>
            <CircleWithIcon icon={icon} backgroundColor={circleBackgroundColor} size={width * 0.16} castShadow={true}/>
            <Text style={[GlobalThemeStyle.text_SemiBold, buttonCircleWithTextStyle.text]}>{text}</Text>
        </TouchableOpacity>
    )
}
