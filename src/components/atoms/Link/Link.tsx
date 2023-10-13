import React from 'react'
import linkStyle from './Link.style'
import { Text } from 'react-native'

interface ILinkProps {
    onPress?: () => void
    children?: string
    testID?: string
}

export default function Link({
    onPress,
    children,
    testID
}: ILinkProps){
    return (
        <Text onPress={onPress} testID={testID} style={linkStyle.text}>{children}</Text>
    )
}
