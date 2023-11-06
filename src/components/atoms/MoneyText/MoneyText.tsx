import React from 'react'
import { StyleProp,Text, View, ViewStyle } from 'react-native'

import { TCurrency } from '../../../utils/currency'

import globalThemeStyle, { MAIN_DARK } from '../../../styling/GlobalTheme.style'
import moneyTextStyle from './MoneyText.style'

interface IMoneyTextProps {
    amount?: number
    currency?: TCurrency
    hasNumberFormatting?: boolean
    isCurrencyBold?: boolean
    fontSize?: number
    containerStyle?: StyleProp<ViewStyle>
}

export default function MoneyText({
    amount=10,
    currency={iso: 'usd', symbol: '$', left: true},
    hasNumberFormatting=false,
    isCurrencyBold=true,
    fontSize=20,
    containerStyle
}: IMoneyTextProps){
    const minusSign = amount < 0 && <Text style={[globalThemeStyle.text_Regular, moneyTextStyle.minusSign]}>- </Text> 
    const amountIntFinal = hasNumberFormatting ? Math.abs(Math.floor(amount)).toLocaleString().replace(',', ' ') : Math.abs(Math.floor(amount))
    const amountDecFinal = Math.abs(((amount * 100) % 100)).toLocaleString(undefined, {minimumIntegerDigits: 2})

    return (
        <View style={[moneyTextStyle.moneyContainer, containerStyle]}>
            {minusSign}
            <Text style={[globalThemeStyle.text_Regular, {fontSize: fontSize, color: MAIN_DARK}]}>{amountIntFinal}.</Text>
            <View style={[moneyTextStyle.floatCurrencyContainer, {paddingBottom: fontSize / 10}]}>
                <Text style={[globalThemeStyle.text_Regular, {fontSize: Math.ceil(fontSize / 1.5), color: MAIN_DARK}]}>{amountDecFinal}</Text>
                <Text style={[isCurrencyBold ? globalThemeStyle.text_Bold : globalThemeStyle.text_Regular, {fontSize: Math.ceil(fontSize / 1.5), color: MAIN_DARK, marginLeft: Math.ceil(fontSize / 5)}]}>{currency.iso.toLocaleUpperCase()}</Text>
            </View>
        </View>
    )
}
