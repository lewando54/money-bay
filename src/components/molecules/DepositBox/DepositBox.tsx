﻿import React from 'react'
import { View } from 'react-native'

import { CustomText } from '@atoms'
import { Button, CircleWithIcon, MoneyText, UniversalContainer } from '@atoms'
import { TCurrency } from '@utils/currency'

import Check from './assets/check.svg'
import SafeDeposit from './assets/safe-deposit.svg'
import depositBoxStyle from './DepositBox.style'

import globalThemeStyle, { globalColors } from '@styling/GlobalTheme.style'

interface IDepositBoxProps {
    currentAmount?: number
    currency?: TCurrency
    dateFrom?: Date
    dateTo?: Date
    isFinished?: boolean
    percent?: number
    interest?: number
    testID?: string
    onTopUpClick?: () => void
    onWithdrawalClick?: () => void
    onExtendClick?: () => void
}

export default function DepositBox({
    currentAmount=3000,
    currency={iso: 'usd', symbol: '$', left: true},
    dateFrom=new Date('2022-09-01'),
    dateTo=new Date('2022-10-01'),
    isFinished=true,
    percent=8,
    interest=60.57,
    testID,
    onTopUpClick,
    onWithdrawalClick,
    onExtendClick
}: IDepositBoxProps){
    const sameYear = dateFrom.getFullYear() == dateTo.getFullYear()
    const dateFromString = dateFrom.toLocaleDateString('en-US', 
        sameYear ? { month: 'short', day: 'numeric' } :
            { year: 'numeric', month: 'short', day: 'numeric' }
    )
    const dateToString = dateTo.toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
    })
    const ExtendOrTopUpButton = 
        isFinished ? 
            <Button width='50%' color={globalColors.ORANGE} size='small' onClick={onExtendClick}>Extend</Button> : 
            <Button width='50%' color={globalColors.PLAIN_BLUE} size='small' onClick={onTopUpClick}>Top - Up</Button>
    const icon = 
        isFinished ?
            <CircleWithIcon size={22} backgroundColor={globalColors.GOOD_GREEN} icon={<Check />}/> :
            <SafeDeposit />

    return (
        <UniversalContainer testID={testID} style={depositBoxStyle.container} castShadow={true}>
            <View style={depositBoxStyle.titleAndMoneyContainer}>
                {icon}
                <View style={depositBoxStyle.moneyAndDateContainer}>
                    <MoneyText amount={currentAmount} currency={currency}/>
                    <CustomText style={[globalThemeStyle.text_Regular, {color: globalColors.BODY_TEXT_COLOR, fontSize: 12}]}>{dateFromString} - {dateToString}</CustomText>
                </View>
                <View style={depositBoxStyle.percentContainer}>
                    <CustomText style={[globalThemeStyle.text_SemiBold, {fontSize: 16, color: globalColors.MAIN_DARK}]}>{percent}%</CustomText>
                    <CustomText style={[globalThemeStyle.text_SemiBold, {fontSize: 12, color: globalColors.GOOD_GREEN}]}>+ {interest.toLocaleString('en-US', {minimumIntegerDigits: 2})}</CustomText>
                </View>
            </View>
            <View style={depositBoxStyle.buttonsContainer}>
                {ExtendOrTopUpButton}
                <Button width='50%' color={globalColors.GOOD_GREEN} size='small' onClick={onWithdrawalClick}>Withdrawal</Button>
            </View>
        </UniversalContainer>
    )
}