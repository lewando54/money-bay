import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import separatorStyle from './Separator.style'

interface ISeparatorProps {
    style?: StyleProp<ViewStyle>
}

export default function Separator({
    style
}: ISeparatorProps){
    return (
        <View style={[separatorStyle.mainStyle, style]}></View>
    )
}
