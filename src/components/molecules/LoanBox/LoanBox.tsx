import React from 'react'
import { View, Text } from 'react-native'
import Separator from '../../atoms/Separator/Separator'
import UniversalContainer from '../../atoms/UniversalContainer/UniversalContainer'
import Wallet from './assets/wallet.svg'
import MoneyText from '../../atoms/MoneyText/MoneyText'
import Button from '../../atoms/Button/Button'
import globalThemeStyle, { GOOD_GREEN } from '../../../styling/GlobalTheme.style'
import { TCurrency } from '../../../utils/currency'

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
        <UniversalContainer padding={20} style={{gap: 20}} castShadow={true}>
            <View style={[{flexDirection: 'row', alignItems: 'center', gap: 10}]}>
                <Wallet />
                <MoneyText amount={amount} hasNumberFormatting={true}/>
                <Button size='small' width={'30%'} color={GOOD_GREEN} containerStyle={{marginLeft: 'auto'}} onClick={onPress}>Repay</Button>
            </View>
            <Separator />
            <View style={{flexWrap: 'wrap', gap: 16}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '50%'}}>
                        <Text style={globalThemeStyle.text_SubTitle}>Rate</Text>
                        <Text style={globalThemeStyle.text_Title}>{rate}</Text>
                    </View>
                    <View style={{width: '50%'}}>
                        <Text style={globalThemeStyle.text_SubTitle}>Period</Text>
                        <Text style={globalThemeStyle.text_Title}>{period} month{period == 1 ? '' : 's'}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '50%'}}>
                        <Text style={globalThemeStyle.text_SubTitle}>Monthly payment</Text>
                        <Text style={globalThemeStyle.text_Title}>{monthlyPayment.toLocaleString(undefined, {minimumFractionDigits: 2, minimumIntegerDigits: 2}).replace(',', ' ')+' '+currency.iso.toLocaleUpperCase()}</Text>
                    </View>
                    <View style={{width: '50%'}}>
                        <Text style={globalThemeStyle.text_SubTitle}>Total paid</Text>
                        <Text style={globalThemeStyle.text_Title}>{totalPaid.toLocaleString(undefined, {minimumFractionDigits: 2, minimumIntegerDigits: 2}).replace(',', ' ')+' '+currency.iso.toLocaleUpperCase()}</Text>
                    </View>
                </View>
            </View>
        </UniversalContainer>
    )
}
