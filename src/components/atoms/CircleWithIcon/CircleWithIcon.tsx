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
    onClick?: () => void
    testID?: string
}

export default function CircleWithIcon({
    size=40,
    icon=<AntDesign size={size} name={'question'} color={'#55ACEE'}/>,
    backgroundColor='#F1F5FD',
    start={x: 0.5, y: 0},
    end={x: 0.5, y: 1},
    onClick,
    testID
}: ICircleWithIconProps){
    if(onClick && backgroundColor instanceof Array){
        return (
            <TouchableOpacity 
                style={[
                    circleWithIconStyle({size, backgroundColor: '#fff'}).circle
                ]}
                testID={testID}
                onPress={onClick}
            >
                <LinearGradient colors={backgroundColor} start={start} end={end}>
                    {icon}
                </LinearGradient>
            </TouchableOpacity>
        )
    }
    else if(onClick && !(backgroundColor instanceof Array)){
        return (
            <TouchableOpacity 
                style={[
                    circleWithIconStyle({size, backgroundColor}).circle
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
                    circleWithIconStyle({size, backgroundColor: '#fff'}).circle
                ]}
                testID={testID}
            >
                <LinearGradient colors={backgroundColor} start={start} end={end}>
                    {icon}
                </LinearGradient>
            </View>
        )
    }
    else{
        return (
            <View 
                style={[
                    circleWithIconStyle({size, backgroundColor}).circle
                ]}
                testID={testID}
            >
                {icon}
            </View>
        )
    }
}
