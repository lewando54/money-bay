import React from 'react'
import linkStyle from './Link.style'
import { StyleProp, Text, TextStyle } from 'react-native'

interface ILinkProps {
    onPress?: () => void
    children?: string
    style?: StyleProp<TextStyle>
    testID?: string
}

export default function Link({
    onPress,
    children,
    style,
    testID
}: ILinkProps){
    return (
        <Text onPress={onPress} testID={testID} style={[linkStyle.text, style]}>{children}</Text>
    )
}
