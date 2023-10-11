import { View, Image, Text } from 'react-native'
import { TCurrency } from '../../../utils/currency'
import MiniCreditCard from '../../atoms/MiniCreditCard/MiniCreditCard'
import UniversalContainer from '../../atoms/UniversalContainer/UniversalContainer'
import productBarStyle from './ProductBar.style'
import { TCardIssuer } from '../../../utils/cardIssuers'
import { Entypo } from '@expo/vector-icons' 
import globalThemeStyle, { BODY_TEXT_COLOR, MAIN_DARK } from '../../../styling/GlobalTheme.style'

type TProduct = 'card' | 'account'

interface IProductBarProps {
    product?: TProduct
    name?: string
    balance?: number
    balanceTextColor?: string
    cardIssuer?: TCardIssuer
    currency?: TCurrency
    hasMenuButton?: boolean
    onMenuClick?: () => void
}

export default function ProductBar({
    product='card',
    name='**** **** **** 7895',
    balance=2500,
    balanceTextColor,
    cardIssuer='visa',
    currency={iso: 'usd', symbol: '$', left: true},
    hasMenuButton=false, 
    onMenuClick,
}: IProductBarProps){
    const ProductIcon = 
        product == 'card' ? 
            <MiniCreditCard cardIssuer={cardIssuer}/> :
            product == 'account' &&
            <Image source={require('./assets/check.png')} />

    const ThreeDotsMenu = hasMenuButton ? <Entypo name="dots-three-vertical" size={16} color={BODY_TEXT_COLOR} testID='three-dots-button' style={{marginLeft: 'auto'}} onPress={onMenuClick}/> : undefined

    return (
        <UniversalContainer style={productBarStyle.container}>
            {ProductIcon}
            <View>
                <Text style={[globalThemeStyle.text_Regular, {color: BODY_TEXT_COLOR}]}>
                    {name}
                </Text>
                <Text style={[globalThemeStyle.text_SemiBold, {color: balanceTextColor ? balanceTextColor : MAIN_DARK}]}>
                    {balance.toLocaleString(undefined, {minimumIntegerDigits: 2, minimumFractionDigits: 2}).replace(',', ' ')} {currency.iso.toLocaleUpperCase()}
                </Text>
            </View>
            {ThreeDotsMenu}
        </UniversalContainer>
    )
}
