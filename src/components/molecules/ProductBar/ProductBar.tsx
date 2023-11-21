import React from 'react'
import { Image, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons' 

import { MiniCreditCard, UniversalContainer } from '@atoms'
import { TCardIssuer } from '@utils/cardIssuers'
import { TCurrency } from '@utils/currency'

import productBarStyle from './ProductBar.style'

import globalThemeStyle, { globalColors } from '@styling/GlobalTheme.style'

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

    const ThreeDotsMenu = hasMenuButton ? <Entypo name="dots-three-vertical" size={16} color={globalColors.BODY_TEXT_COLOR} testID='three-dots-button' style={{marginLeft: 'auto'}} onPress={onMenuClick}/> : undefined

    return (
        <UniversalContainer style={productBarStyle.container}>
            {ProductIcon}
            <View>
                <Text style={[globalThemeStyle.text_Regular, {color: globalColors.BODY_TEXT_COLOR}]}>
                    {name}
                </Text>
                <Text style={[globalThemeStyle.text_SemiBold, {color: balanceTextColor ? balanceTextColor : globalColors.MAIN_DARK}]}>
                    {balance.toLocaleString('en-US', {minimumIntegerDigits: 2, minimumFractionDigits: 2}).replace(',', ' ')} {currency.iso.toLocaleUpperCase()}
                </Text>
            </View>
            {ThreeDotsMenu}
        </UniversalContainer>
    )
}
