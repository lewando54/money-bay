import { View } from 'react-native'
import universalContainerStyle from './UniversalContainer.style'

interface IUniversalContainerProps {
    children?: React.ReactNode
    width?: string | number
    padding?: string | number
    backgroundColor?: string
    castShadow?: boolean
}

export default function UniversalContainer({
    children,
    width='100%',
    padding=10,
    backgroundColor='white',
    castShadow=false
}: IUniversalContainerProps){
    return (
        <View 
            style={[
                universalContainerStyle({width, padding, backgroundColor}).container,
                castShadow && {
                    shadowOffset: {width: 0, height: 6},
                    shadowRadius: 16,
                    shadowColor: '#161966',
                    shadowOpacity: 0.08,
                    elevation: 20,
                }
            ]}
        >
            {children}
        </View>
    )
}