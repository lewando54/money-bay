import { Pressable, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import buttonStyle from './Button.style'
import GlobalThemeStyle, { PRIMARY_GRADIENT_END_COLOR, PRIMARY_GRADIENT_START_COLOR, SECONDARY_GRADIENT_FULL_COLOR } from '../../../styling/GlobalTheme.style'
import { ReactElement } from 'react'

type colorProp = 'primary' | 'secondary' | string
type sizeProp = 'normal' | 'small'

interface IButtonProps{
    children: React.ReactNode
    color?: colorProp,
    size?: sizeProp,
    width?: string,
    onClick?: ((event: GestureResponderEvent) => void) | null | undefined
    testID?: string
}

export default function Button({
    children,
    color = 'primary',
    size = 'normal',
    width = '100%',
    onClick,
    testID
}: IButtonProps){
    const gradientColor = 
        color === 'primary' ? [PRIMARY_GRADIENT_START_COLOR, PRIMARY_GRADIENT_END_COLOR]
        : color === 'secondary' ? [SECONDARY_GRADIENT_FULL_COLOR, SECONDARY_GRADIENT_FULL_COLOR]
        : [color, color]

    return (
        <TouchableOpacity style={{width: width}} onPress={onClick} testID={testID}>
            <LinearGradient 
                colors={gradientColor}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={[
                    buttonStyle.button,
                    size === 'small' && { padding: 10 },
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