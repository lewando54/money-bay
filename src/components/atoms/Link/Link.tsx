import React from 'react'
import { StyleProp,  TextStyle } from 'react-native'

import { CustomText } from '@atoms'

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
        <CustomText onPress={onPress} testID={testID} style={[linkStyle.text, style]}>{children}</CustomText>
    )
}
