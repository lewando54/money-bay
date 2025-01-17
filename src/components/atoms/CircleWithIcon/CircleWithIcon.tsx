import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import circleWithIconStyle from './CircleWithIcon.style'

import globalThemeStyle from '@styling/GlobalTheme.style'

interface ICircleWithIconProps {
    size?: number,
    icon?: React.ReactNode,
    backgroundColor?: string | Array<string>,
    start?: {x: number, y: number},
    end?: {x: number, y: number},
    castShadow?: boolean
    onClick?: () => void
    testID?: string
}

export default function CircleWithIcon({
    size=40,
    icon=<AntDesign size={size} name={'question'} color={'#55ACEE'}/>,
    backgroundColor='#F1F5FD',
    start={x: 0.5, y: 0},
    end={x: 0.5, y: 1},
    castShadow=false,
    onClick,
    testID
}: ICircleWithIconProps){

    if(onClick && backgroundColor instanceof Array){
        return (
            <TouchableOpacity 
                style={[
                    circleWithIconStyle({size, backgroundColor: '#fff0'}).circle,
                    castShadow && globalThemeStyle.default_Shadow
                ]}
                testID={testID}
                onPress={onClick}
            >
                <LinearGradient style={circleWithIconStyle({size, backgroundColor: '#fff0'}).circle} colors={backgroundColor} start={start} end={end}>
                    {icon}
                </LinearGradient>
            </TouchableOpacity>
        )
    }
    
    if(onClick && !(backgroundColor instanceof Array)){
        return (
            <TouchableOpacity 
                style={[
                    circleWithIconStyle({size, backgroundColor}).circle,
                    castShadow && globalThemeStyle.default_Shadow
                ]}
                testID={testID}
                onPress={onClick}
            >
                {icon}
            </TouchableOpacity>
        )
    }
    
    if(backgroundColor instanceof Array){
        return (
            <View 
                style={[
                    circleWithIconStyle({size, backgroundColor: '#fff0'}).circle,
                    castShadow && globalThemeStyle.default_Shadow
                ]}
                testID={testID}
            >
                <LinearGradient style={circleWithIconStyle({size, backgroundColor: '#fff0'}).circle} colors={backgroundColor} start={start} end={end}>
                    {icon}
                </LinearGradient>
            </View>
        )
    }

    return (
        <View 
            style={[
                circleWithIconStyle({size, backgroundColor}).circle,
                castShadow && globalThemeStyle.default_Shadow
            ]}
            testID={testID}
        >
            {icon}
        </View>
    )
}
