import React from 'react'
import { Image, StyleProp,  View,ViewStyle } from 'react-native'

import Images from '@assets/images'
import { CustomText } from '@atoms'
import { Button, TColorProp, TSizeProp } from '@atoms'

import InfoScreenTemplateStyle from './InfoScreenTemplate.style'

import { globalColors } from '@styling/GlobalTheme.style'

interface IInfoScreenTemplateProps {
    icon?: React.ReactNode
    title?: string
    titleColor?: string
    body?: React.ReactNode
    additionalButtons?: Array<{
        children: React.ReactNode,
        color?: TColorProp,
        size?: TSizeProp,
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
    icon=<CustomText>Icon</CustomText>,
    title='Account created!',
    titleColor=globalColors.MAIN_DARK,
    body=<CustomText>Test</CustomText>,
    additionalButtons,
    onSubmit,
    testID
}: IInfoScreenTemplateProps){
    return (
        <View style={InfoScreenTemplateStyle.mainContainer} testID={testID}>
            <Image source={Images.bgInfoCard} style={InfoScreenTemplateStyle.bgImage}/>
            <View style={InfoScreenTemplateStyle.iconTitleContainer}>
                {icon}
                <CustomText style={[InfoScreenTemplateStyle.titleText, {color: titleColor}]}>{title}</CustomText>
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
