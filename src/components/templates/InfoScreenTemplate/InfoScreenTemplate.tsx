﻿import React from 'react'
import Button, { colorProp, sizeProp } from '../../atoms/Button/Button'
import { StyleProp, ViewStyle, Text, Image, View } from 'react-native'
import Images from '@assets/images'
import { MAIN_DARK } from '../../../styling/GlobalTheme.style'
import InfoScreenTemplateStyle from './InfoScreenTemplate.style'

interface IInfoScreenTemplateProps {
    icon?: React.ReactNode
    title?: string
    titleColor?: string
    body?: React.ReactNode
    additionalButtons?: Array<{
        children: React.ReactNode,
        color?: colorProp,
        size?: sizeProp,
        width?: string,
        containerStyle?: StyleProp<ViewStyle>,
        onClick?: (() => void) | null | undefined,
        testID?: string
    }>
    onSubmit?: () => void
    testID?: string
}

// 

export default function InfoScreenTemplate({
    icon=<Text>Icon</Text>,
    title='Account created!',
    titleColor=MAIN_DARK,
    body=<Text>Test</Text>,
    additionalButtons,
    onSubmit,
    testID
}: IInfoScreenTemplateProps){
    return (
        <View style={InfoScreenTemplateStyle.mainContainer} testID={testID}>
            <Image source={Images.bgInfoCard} style={InfoScreenTemplateStyle.bgImage}/>
            <View style={InfoScreenTemplateStyle.iconTitleContainer}>
                {icon}
                <Text style={[InfoScreenTemplateStyle.titleText, {color: titleColor}]}>{title}</Text>
                {body}
            </View>
            <View style={InfoScreenTemplateStyle.buttonsContainer}>
                {additionalButtons && additionalButtons.map((item, index) => 
                    <Button 
                        key={index}
                        color={item.color}
                        size={item.size}
                        width={item.width}
                        containerStyle={item.containerStyle}
                        onClick={item.onClick}
                        testID={item.testID}
                    >
                        {item.children}
                    </Button>
                )}
                <Button onClick={onSubmit}>Done</Button>
            </View>
        </View>
    )
}
