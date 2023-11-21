import React from 'react'
import { Text,View } from 'react-native'

import { Button, MoneyText, Separator, UniversalContainer } from '@atoms'
import { TCurrency } from '@utils/currency'

import Wallet from './assets/wallet.svg'
import LoanBoxStyle from './LoanBox.style'

import globalThemeStyle, { globalColors } from '@styling/GlobalTheme.style'

interface ILoanBoxProps {
    amount?: number
    rate?: number
    period?: number
    monthlyPayment?: number
    totalPaid?: number
    currency?: TCurrency
    onPress?: () => void
}

export default function LoanBox({
    amount=-20532,
    rate=13,
    period=24,
    monthlyPayment=1117,
    totalPaid=4468,
    currency={iso: 'usd', symbol: '$', left: true},
    onPress
}: ILoanBoxProps){
    return (
        <UniversalContainer padding={20} style={LoanBoxStyle.container} castShadow={true}>
            <View style={LoanBoxStyle.header}>
                <Wallet />
                <MoneyText amount={amount} hasNumberFormatting={true}/>
                <Button size='small' width={'30%'} color={globalColors.GOOD_GREEN} containerStyle={LoanBoxStyle.repayBtn} onClick={onPress}>Repay</Button>
            </View>
            <Separator />
            <View style={LoanBoxStyle.innerContainer}>
                <View style={LoanBoxStyle.innerRow}>
                    <View style={LoanBoxStyle.innerRowItem}>
                        <Text style={globalThemeStyle.text_SubTitle}>Rate</Text>
                        <Text style={globalThemeStyle.text_Title}>{rate}</Text>
                    </View>
                    <View style={LoanBoxStyle.innerRowItem}>
                        <Text style={globalThemeStyle.text_SubTitle}>Period</Text>
                        <Text style={globalThemeStyle.text_Title}>{period} month{period == 1 ? '' : 's'}</Text>
                    </View>
                </View>
                <View style={LoanBoxStyle.innerRow}>
                    <View style={LoanBoxStyle.innerRowItem}>
                        <Text style={globalThemeStyle.text_SubTitle}>Monthly payment</Text>
                        <Text style={globalThemeStyle.text_Title}>{monthlyPayment.toLocaleString('en-US', {minimumFractionDigits: 2, minimumIntegerDigits: 2}).replace(',', ' ')+' '+currency.iso.toLocaleUpperCase()}</Text>
                    </View>
                    <View style={LoanBoxStyle.innerRowItem}>
                        <Text style={globalThemeStyle.text_SubTitle}>Total paid</Text>
                        <Text style={globalThemeStyle.text_Title}>{totalPaid.toLocaleString('en-US', {minimumFractionDigits: 2, minimumIntegerDigits: 2}).replace(',', ' ')+' '+currency.iso.toLocaleUpperCase()}</Text>
                    </View>
                </View>
            </View>
        </UniversalContainer>
    )
}
