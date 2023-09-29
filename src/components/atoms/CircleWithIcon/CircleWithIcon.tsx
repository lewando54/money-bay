import { TouchableOpacity, Image, View } from 'react-native'
import circleWithIconStyle from './CircleWithIcon.style'
import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

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
    const shadow = {
        shadowOffset: {width: 0, height: 6},
        shadowRadius: 16,
        shadowColor: '#161966',
        shadowOpacity: 0.08,
        elevation: 20,
    }

    if(onClick && backgroundColor instanceof Array){
        return (
            <TouchableOpacity 
                style={[
                    circleWithIconStyle({size, backgroundColor: '#fff0'}).circle,
                    castShadow && shadow
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
    else if(onClick && !(backgroundColor instanceof Array)){
        return (
            <TouchableOpacity 
                style={[
                    circleWithIconStyle({size, backgroundColor}).circle,
                    castShadow && shadow
                ]}
                testID={testID}
                onPress={onClick}
            >
                    {icon}
            </TouchableOpacity>
        )
    }
    else if(backgroundColor instanceof Array){
        return (
            <View 
                style={[
                    circleWithIconStyle({size, backgroundColor: '#fff0'}).circle,
                    castShadow && shadow
                ]}
                testID={testID}
            >
                <LinearGradient style={circleWithIconStyle({size, backgroundColor: '#fff0'}).circle} colors={backgroundColor} start={start} end={end}>
                    {icon}
                </LinearGradient>
            </View>
        )
    }
    else{
        return (
            <View 
                style={[
                    circleWithIconStyle({size, backgroundColor}).circle,
                    castShadow && shadow
                ]}
                testID={testID}
            >
                {icon}
            </View>
        )
    }
}
