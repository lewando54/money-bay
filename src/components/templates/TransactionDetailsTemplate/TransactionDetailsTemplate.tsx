import React from 'react'
import { Image, View } from 'react-native'

import Images from '@assets/images'
import { CustomText } from '@atoms'
import { Button, Separator } from '@atoms'
import { ButtonCircleWithText } from '@molecules'
import { TCurrency } from '@utils/currency'

import transactionDetailsTemplateStyle from './TransactionDetailsTemplate.style'

import globalThemeStyle, { globalColors } from '@styling/GlobalTheme.style'

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
    statusElement=<View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}><Images.successDetailsSVG/><CustomText style={{...globalThemeStyle.text_SemiBold, color: globalColors.GOOD_GREEN, fontSize: 14}}>Success</CustomText></View>,
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
                <ButtonCircleWithText circleBackgroundColor={globalColors.ORANGE} text={name} icon={<Images.smartphoneSVG color={'white'}/>}/>
                <CustomText style={transactionDetailsTemplateStyle.dateText}>{date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})} at {date.toLocaleTimeString('en-US', {hourCycle: 'h12', hour: 'numeric', minute: 'numeric'})}</CustomText>
                <View style={transactionDetailsTemplateStyle.moneyContainer}>
                    <CustomText style={transactionDetailsTemplateStyle.bigMoneyText}>- {currency.symbol} {wholeAmount}.</CustomText>
                    <CustomText style={transactionDetailsTemplateStyle.smallMoneyText}>{parseInt(decimalAmount).toLocaleString('en-US', {minimumIntegerDigits: 2})}</CustomText>
                </View>
                <CustomText style={transactionDetailsTemplateStyle.cellHeader}>Sent to {recipientName}</CustomText>
                {statusElement}
                <Separator />
                <View style={transactionDetailsTemplateStyle.tableContainer}>
                    <View style={transactionDetailsTemplateStyle.cellContainer}>
                        <CustomText style={transactionDetailsTemplateStyle.cellHeader}>Sent to</CustomText>
                        <CustomText style={transactionDetailsTemplateStyle.cellData}>{recipientName}</CustomText>
                    </View>
                    <View style={transactionDetailsTemplateStyle.cellContainer}>
                        <CustomText style={transactionDetailsTemplateStyle.cellHeader}>Card</CustomText>
                        <CustomText style={transactionDetailsTemplateStyle.cellData}>{cardNumber}</CustomText>
                    </View>
                    <View style={transactionDetailsTemplateStyle.cellContainer}>
                        <CustomText style={transactionDetailsTemplateStyle.cellHeader}>Amount</CustomText>
                        <CustomText style={transactionDetailsTemplateStyle.cellData}>{wholeAmount+'.'+decimalAmount} {currency.iso.toLocaleUpperCase()}</CustomText>
                    </View>
                    <View style={transactionDetailsTemplateStyle.cellContainer}>
                        <CustomText style={transactionDetailsTemplateStyle.cellHeader}>Fee</CustomText>
                        <CustomText style={transactionDetailsTemplateStyle.cellData}>{fee} {currency.iso.toLocaleUpperCase()}</CustomText>
                    </View>
                    <View style={transactionDetailsTemplateStyle.cellContainer}>
                        <CustomText style={transactionDetailsTemplateStyle.cellHeader}>Residual balance</CustomText>
                        <CustomText style={transactionDetailsTemplateStyle.cellData}>{residualBalance} {currency.iso.toLocaleUpperCase()}</CustomText>
                    </View>
                    <Button containerStyle={transactionDetailsTemplateStyle.downloadButton} onClick={onDownloadPDFPress}>Download PDF</Button>
                </View>
            </View>
        </View>
    )
}
