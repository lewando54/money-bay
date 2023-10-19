import React from 'react'
import infoScreenTemplateStyle from './InfoScreenTemplate.style'
import Button, { colorProp, sizeProp } from '../../atoms/Button/Button'
import { StyleProp, ViewStyle, Text, Image, View, Dimensions } from 'react-native'
import Images from 'assets/images'
import globalThemeStyle, { MAIN_DARK } from '../../../styling/GlobalTheme.style'

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
    const { width, height } = Dimensions.get('screen')

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} testID={testID}>
            <Image source={Images.bgInfoCard} style={{width: width, height: height, resizeMode: 'contain', position: 'absolute', top: height * -0.1740}}/>
            <View style={{marginBottom: 'auto', marginTop: height * 0.2327, justifyContent: 'center', alignItems: 'center', paddingHorizontal: width * 0.1233}}>
                {icon}
                <Text style={{...globalThemeStyle.text_Bold, color: titleColor, fontSize: 36}}>{title}</Text>
                {body}
            </View>
            <View style={{marginTop: 'auto', width: '100%', padding: width * 0.0533, gap: height * 0.0172}}>
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
