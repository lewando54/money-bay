import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import CircleWithIcon from '../../atoms/CircleWithIcon/CircleWithIcon'
import UniversalContainer from '../../atoms/UniversalContainer/UniversalContainer'

import squareButtonWithIconStyle from './SquareButtonWithIcon.style'

interface ISquareButtonWithIconProps {
    buttonBackgroundColor?: string
    circleBackgroundColor?: string
    icon?: React.ReactNode
    text?: string
    onClick?: () => void
    testID?: string
}

export default function SquareButtonWithIcon({
    buttonBackgroundColor='#fff',
    circleBackgroundColor='#3EB290',
    icon=<AntDesign size={20} name={'creditcard'} color={'#fff'}/>,
    text='Add new card',
    onClick,
    testID='square-button-with-icon'
}: ISquareButtonWithIconProps){
    return (
        <TouchableOpacity onPress={onClick} testID={testID} style={squareButtonWithIconStyle.outerContainer}>
            <UniversalContainer padding={20} height={'100%'} castShadow={true} backgroundColor={buttonBackgroundColor}>
                <View style={squareButtonWithIconStyle.innerContainer}>
                    <CircleWithIcon icon={icon} backgroundColor={circleBackgroundColor} size={50} />
                    <Text style={squareButtonWithIconStyle.text}>{text}</Text>
                </View>
            </UniversalContainer>
        </TouchableOpacity>
    )
}
