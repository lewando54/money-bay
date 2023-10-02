import { TouchableOpacity, Text } from 'react-native'
import optionButtonStyle from './OptionButton.style'
import globalThemeStyle from '../../../styling/GlobalTheme.style'

type TOptionButtonVariant = 'large' | 'normal'

interface IOptionButtonProps {
    variant?: TOptionButtonVariant
    text?: string
    isChosen?: boolean
    onClick?: () => void
    testID?: string
}

export default function OptionButton({
    variant='large',
    text='USD',
    isChosen=false,
    onClick,
    testID
}: IOptionButtonProps){
    return (
        <TouchableOpacity
            onPress={onClick} 
            style={[
                optionButtonStyle.baseStyle,
                globalThemeStyle.default_Shadow,
                isChosen && optionButtonStyle.chosenStyle
            ]}
            testID={testID}
        >
            <Text
                style={[
                    optionButtonStyle.baseText,
                    variant == 'normal' && { fontFamily: 'MulishRegular' },
                    isChosen && optionButtonStyle.chosenText
                ]}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}
