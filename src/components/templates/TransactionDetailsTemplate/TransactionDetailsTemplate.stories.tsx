/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { Text,View } from 'react-native'
import { Meta,StoryObj } from '@storybook/react-native'
import { TCurrency } from 'src/utils/currency'

import Images from '@assets/images'

import TransactionDetailsTemplate from './TransactionDetailsTemplate'

import globalThemeStyle, { globalColors } from '@styling/GlobalTheme.style'

interface IVisibleMockupProps {
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
}

function Visible({
    wholeAmount,
    decimalAmount,
    name,
    date,
    recipientName,
    statusElement,
    cardNumber,
    amount,
    fee,
    residualBalance,
    currency,
    onDownloadPDFPress
}: IVisibleMockupProps){
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <TransactionDetailsTemplate
                wholeAmount={wholeAmount}
                decimalAmount={decimalAmount}
                name={name}
                date={date}
                recipientName={recipientName}
                statusElement={statusElement}
                cardNumber={cardNumber}
                amount={amount}
                fee={fee}
                residualBalance={residualBalance}
                currency={currency}
                onDownloadPDFPress={onDownloadPDFPress}
            />
        </View>
    )
}

const meta = {
    component: Visible,
    argTypes: {
        wholeAmount: {control: 'text'},
        decimalAmount: {control: 'text'},
        name: {control: 'text'},
        date: {control: 'date'},
        recipientName: {control: 'text'},
        statusElement: {control: 'object'},
        cardNumber: {control: 'text'},
        amount: {control: 'number'},
        fee: {control: 'number'},
        residualBalance: {control: 'number'},
        currency: {control: 'object'},
        onDownloadPDFPress: {action: 'Download PDF Pressed'},
    }
} satisfies Meta<typeof Visible>

export default meta
type Story = StoryObj<typeof Visible>

export const Default: Story = {
    args: {
        wholeAmount: '10',
        decimalAmount: '0',
        name: 'Mobile Payment',
        date: new Date('2022-09-10T11:34:13'),
        recipientName: 'Hillary Holmes',
        statusElement: <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}><Images.successDetailsSVG/><Text style={{...globalThemeStyle.text_SemiBold, color: globalColors.GOOD_GREEN, fontSize: 14}}>Success</Text></View>,
        cardNumber: '**** 4253',
        fee: 0,
        residualBalance: 4853.27,
        currency: {iso: 'usd', symbol: '$', left: true}
    }
}
