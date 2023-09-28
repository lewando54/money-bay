import { TouchableOpacity, Image, View } from 'react-native'
import circleWithIconStyle from './CircleWithIcon.style'
import { AntDesign } from '@expo/vector-icons'

interface ICircleWithIconProps {
    size?: number,
    icon?: React.ReactNode,
    backgroundColor?: string,
    onClick?: () => void
    testID?: string
}

export default function CircleWithIcon({
    size=40,
    icon=<AntDesign size={size} name={'question'} color={'#55ACEE'}/>,
    backgroundColor='#F1F5FD',
    onClick,
    testID
}: ICircleWithIconProps){
    if(onClick){
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
