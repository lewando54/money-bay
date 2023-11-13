import React from 'react'
import { StyleProp,Text, TouchableOpacity, ViewStyle } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import GlobalThemeStyle, { PRIMARY_GRADIENT_END_COLOR, PRIMARY_GRADIENT_START_COLOR, SECONDARY_GRADIENT_FULL_COLOR } from '../../../styling/GlobalTheme.style'
import buttonStyle from './Button.style'

export type colorProp = 'primary' | 'secondary' | string
export type sizeProp = 'normal' | 'small'

export interface IButtonProps{
    children: React.ReactNode
    color?: colorProp
    size?: sizeProp
    width?: string
    containerStyle?: StyleProp<ViewStyle>
    onClick?: (() => void) | null | undefined
    testID?: string
}

export default function Button({
    children,
    color = 'primary',
    size = 'normal',
    width = '100%',
    containerStyle,
    onClick,
    testID
}: IButtonProps){
    const gradientColors = {
        primary: [PRIMARY_GRADIENT_START_COLOR, PRIMARY_GRADIENT_END_COLOR],
        secondary: [SECONDARY_GRADIENT_FULL_COLOR, SECONDARY_GRADIENT_FULL_COLOR]
    }

    const gradientColor = gradientColors[color] == undefined ? [color, color] : gradientColors[color]

    return (
        <TouchableOpacity style={[{width: width}, containerStyle]} onPress={onClick} testID={testID}>
            <LinearGradient 
                colors={gradientColor}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={[
                    buttonStyle.button,
                    size === 'small' && { padding: 8, borderRadius: 5 },
                    color === 'secondary' && buttonStyle.secondaryButton
                ]}>
                <Text style={[
                    buttonStyle.text,
                    color === 'primary' && buttonStyle.primaryText,
                    color === 'secondary' && buttonStyle.secondaryText,
                    size === 'small' && [{ fontSize: 12 }, GlobalThemeStyle.text_SemiBold]
                ]}>
                    {children}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}