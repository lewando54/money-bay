import { Image, View } from 'react-native'
import miniCreditCardStyle from './MiniCreditCard.style'
import { LinearGradient } from 'expo-linear-gradient'

type TCardIssuer = 'visa' | 'mastercard'
type TGradientColors = Array<string>

interface IMiniCreditCardProps {
    cardIssuer?: TCardIssuer
    gradientColors?: TGradientColors
    testID?: string
}

export default function MiniCreditCard({
    cardIssuer='visa',
    gradientColors=['#C285AB', '#7AA1CE', '#1B1F6A'],
    testID
}: IMiniCreditCardProps){
    const cardIssuerLogo = 
    cardIssuer == 'visa' && require('./assets/visa.png') || 
    cardIssuer == 'mastercard' && require('./assets/mastercard.png')

    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={gradientColors} style={miniCreditCardStyle.container}>
            <Image source={cardIssuerLogo} style={miniCreditCardStyle.cardIssuerLogo}/>
        </LinearGradient>
    )
}
