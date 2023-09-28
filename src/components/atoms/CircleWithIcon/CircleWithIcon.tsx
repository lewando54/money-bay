import { TouchableOpacity, Image, View } from 'react-native'
import circleWithIconStyle from './CircleWithIcon.style'
import { AntDesign } from '@expo/vector-icons'

interface ICircleWithIconProps {
    size?: number,
    icon?: React.ReactNode,
    backgroundColor?: string,
    onClick?: () => void 
}

export default function CircleWithIcon({
    size=40,
    icon=<AntDesign size={size} name={'question'} color={'#55ACEE'}/>,
    backgroundColor='#F1F5FD',
    onClick
}: ICircleWithIconProps){
    if(onClick){
        return (
            <TouchableOpacity style={[
                circleWithIconStyle({size, backgroundColor}).circle
            ]}>
                {icon}
            </TouchableOpacity>
        )
    }
    else{
        return (
            <View style={[
                circleWithIconStyle({size, backgroundColor}).circle
            ]}>
                {icon}
            </View>
        )
    }
}
