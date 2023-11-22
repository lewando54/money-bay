import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import { CustomText } from '@atoms'
import { TCurrency } from '@utils/currency'

import moneyTextStyle from './MoneyText.style'

import globalThemeStyle, { globalColors } from '@styling/GlobalTheme.style'

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
    const minusSign = amount < 0 && <CustomText style={[globalThemeStyle.text_Regular, moneyTextStyle.minusSign]}>- </CustomText> 
    const amountIntFinal = hasNumberFormatting ? Math.abs(Math.floor(amount)).toLocaleString('en-US').replace(',', ' ') : Math.abs(Math.floor(amount))
    const amountDecFinal = Math.abs(((amount * 100) % 100)).toLocaleString('en-US', {minimumIntegerDigits: 2})

    return (
        <View style={[moneyTextStyle.moneyContainer, containerStyle]}>
            {minusSign}
            <CustomText style={[globalThemeStyle.text_Regular, {fontSize: fontSize, color: globalColors.MAIN_DARK}]}>{amountIntFinal}.</CustomText>
            <View style={[moneyTextStyle.floatCurrencyContainer, {paddingBottom: fontSize / 10}]}>
                <CustomText style={[globalThemeStyle.text_Regular, {fontSize: Math.ceil(fontSize / 1.5), color: globalColors.MAIN_DARK}]}>{amountDecFinal}</CustomText>
                <CustomText style={[isCurrencyBold ? globalThemeStyle.text_Bold : globalThemeStyle.text_Regular, {fontSize: Math.ceil(fontSize / 1.5), color: globalColors.MAIN_DARK, marginLeft: Math.ceil(fontSize / 5)}]}>{currency.iso.toLocaleUpperCase()}</CustomText>
            </View>
        </View>
    )
}
