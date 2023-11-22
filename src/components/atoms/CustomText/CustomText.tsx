import React from 'react'
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'

import globalThemeStyle from '@styling/GlobalTheme.style'

interface ICustomTextProps extends TextProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>
}

export default function CustomText({ children, style, ...props }: ICustomTextProps) {
    return (
        <Text style={[globalThemeStyle.text_default, style]} {...props}>
            {children}
        </Text>
    )
}
