import React from 'react'
import { Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { getIssuerLogo,TCardIssuer } from '@utils/cardIssuers'

import miniCreditCardStyle from './MiniCreditCard.style'

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
    return (
        <LinearGradient testID={testID} start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={gradientColors} style={miniCreditCardStyle.container}>
            <Image source={getIssuerLogo(cardIssuer)} style={miniCreditCardStyle.cardIssuerLogo}/>
        </LinearGradient>
    )
}
