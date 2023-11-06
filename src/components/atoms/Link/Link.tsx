import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'

import linkStyle from './Link.style'

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
