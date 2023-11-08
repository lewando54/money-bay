import React from 'react'
import { Image, Text,View } from 'react-native'
import Images from '@assets/images'

import { TCurrency } from '../../../utils/currency'
import Button from '../../atoms/Button/Button'
import Separator from '../../atoms/Separator/Separator'
import ButtonCircleWithText from '../../molecules/ButtonCircleWithText/ButtonCircleWithText'

import globalThemeStyle, { GOOD_GREEN } from '../../../styling/GlobalTheme.style'
import { ORANGE } from '../../../styling/GlobalTheme.style'
import transactionDetailsTemplateStyle from './TransactionDetailsTemplate.style'

interface ITransactionDetailsTemplateProps {
    wholeAmount?: string
    decimalAmount?: string
    name?: string
    date?: Date
    recipientName?: string
    statusElement?: React.ReactNode
    cardNumber?: string
    amount?: number
    fee?: number
    residualBalance?: number
    currency?: TCurrency
    onDownloadPDFPress?: () => void
    testID?: string
}

export default function TransactionDetailsTemplate({
    wholeAmount='10',
    decimalAmount='0',
    name='Mobile Payment',
    date=new Date('2022-09-10T11:34:13'),
    recipientName='Hillary Holmes',
    statusElement=<View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}><Images.successDetailsSVG/><Text style={{...globalThemeStyle.text_SemiBold, color: GOOD_GREEN, fontSize: 14}}>Success</Text></View>,
    cardNumber='**** 4253',
    fee=0,
    residualBalance=4853.27,
    currency={iso: 'usd', symbol: '$', left: true},
    onDownloadPDFPress,
    testID
}: ITransactionDetailsTemplateProps){
    return (
        <View testID={testID} style={{flex: 1}}>
            <Image source={Images.bgSignIn} style={transactionDetailsTemplateStyle.background} />
            <View style={transactionDetailsTemplateStyle.mainContentContainer}>
                <ButtonCircleWithText circleBackgroundColor={ORANGE} text={name} icon={<Images.smartphoneSVG color={'white'}/>}/>
                <Text style={transactionDetailsTemplateStyle.dateText}>{date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})} at {date.toLocaleTimeString('en-US', {hourCycle: 'h12', hour: 'numeric', minute: 'numeric'})}</Text>
                <View style={transactionDetailsTemplateStyle.moneyContainer}>
                    <Text style={transactionDetailsTemplateStyle.bigMoneyText}>- {currency.symbol} {wholeAmount}.</Text>
                    <Text style={transactionDetailsTemplateStyle.smallMoneyText}>{parseInt(decimalAmount).toLocaleString('en-US', {minimumIntegerDigits: 2})}</Text>
                </View>
                <Text style={transactionDetailsTemplateStyle.cellHeader}>Sent to {recipientName}</Text>
                {statusElement}
                <Separator />
                <View style={transactionDetailsTemplateStyle.tableContainer}>
                    <View style={transactionDetailsTemplateStyle.cellContainer}>
                        <Text style={transactionDetailsTemplateStyle.cellHeader}>Sent to</Text>
                        <Text style={transactionDetailsTemplateStyle.cellData}>{recipientName}</Text>
                    </View>
                    <View style={transactionDetailsTemplateStyle.cellContainer}>
                        <Text style={transactionDetailsTemplateStyle.cellHeader}>Card</Text>
                        <Text style={transactionDetailsTemplateStyle.cellData}>{cardNumber}</Text>
                    </View>
                    <View style={transactionDetailsTemplateStyle.cellContainer}>
                        <Text style={transactionDetailsTemplateStyle.cellHeader}>Amount</Text>
                        <Text style={transactionDetailsTemplateStyle.cellData}>{wholeAmount+'.'+decimalAmount} {currency.iso.toLocaleUpperCase()}</Text>
                    </View>
                    <View style={transactionDetailsTemplateStyle.cellContainer}>
                        <Text style={transactionDetailsTemplateStyle.cellHeader}>Fee</Text>
                        <Text style={transactionDetailsTemplateStyle.cellData}>{fee} {currency.iso.toLocaleUpperCase()}</Text>
                    </View>
                    <View style={transactionDetailsTemplateStyle.cellContainer}>
                        <Text style={transactionDetailsTemplateStyle.cellHeader}>Residual balance</Text>
                        <Text style={transactionDetailsTemplateStyle.cellData}>{residualBalance} {currency.iso.toLocaleUpperCase()}</Text>
                    </View>
                    <Button containerStyle={transactionDetailsTemplateStyle.downloadButton} onClick={onDownloadPDFPress}>Download PDF</Button>
                </View>
            </View>
        </View>
    )
}
