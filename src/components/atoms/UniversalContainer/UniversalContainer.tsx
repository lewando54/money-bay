import { StyleProp, View, ViewStyle } from 'react-native'
import universalContainerStyle from './UniversalContainer.style'
import globalThemeStyle from '../../../styling/GlobalTheme.style'

interface IUniversalContainerProps {
    children?: React.ReactNode
    width?: string | number
    height?: string | number
    padding?: string | number
    backgroundColor?: string
    castShadow?: boolean
    style?: StyleProp<ViewStyle>
    testID?: string
}

export default function UniversalContainer({
    children,
    width='100%',
    height='auto',
    padding=10,
    backgroundColor='white',
    castShadow=false,
    style,
    testID='universal-container'
}: IUniversalContainerProps){
    return (
        <View
            testID={testID} 
            style={[
                universalContainerStyle({width, height, padding, backgroundColor}).container,
                castShadow && globalThemeStyle.default_Shadow,
                style
            ]}
        >
            {children}
        </View>
    )
}