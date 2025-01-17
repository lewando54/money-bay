﻿import React from 'react'
import { View } from 'react-native'
import { ProgressBar } from 'react-native-paper'

import { CustomText } from '@atoms'
import { Button, MoneyText, UniversalContainer } from '@atoms'
import { TCurrency } from '@utils/currency'

import PiggyBank from './assets/piggy-bank.svg'
import moneyBoxStyle from './MoneyBox.style'

import globalThemeStyle, { globalColors } from '@styling/GlobalTheme.style'

interface IMoneyBoxProps {
    goalAmount?: number
    currentAmount?: number
    name?: string
    currency?: TCurrency
    testID?: string
    onTopUpClick?: () => void
    onWithdrawalClick?: () => void
}

export default function MoneyBox({
    goalAmount=1200,
    currentAmount=650.27,
    name='New iPhone Pro Max',
    currency={iso: 'usd', symbol: '$', left: true},
    testID,
    onTopUpClick,
    onWithdrawalClick
}: IMoneyBoxProps){
    const verifiedGoalAmount = 
        goalAmount <= 0 ? 
            1 : 
            goalAmount
    const verifiedCurrentAmount = 
        currentAmount > goalAmount ? 
            goalAmount : 
            currentAmount <= 0 ? 
                1 : 
                currentAmount

    return (
        <UniversalContainer testID={testID} style={moneyBoxStyle.container} castShadow={true}>
            <View style={moneyBoxStyle.titleAndGoalContainer}>
                <PiggyBank />
                <CustomText style={[globalThemeStyle.text_Regular, {color: globalColors.MAIN_DARK}]}>{name}</CustomText>
                <MoneyText amount={verifiedGoalAmount} currency={currency} containerStyle={moneyBoxStyle.moneyText}/>
            </View>
            <View>
                <ProgressBar progress={(verifiedCurrentAmount/verifiedGoalAmount)} style={moneyBoxStyle.progressBar} color={globalColors.GOOD_GREEN}/>
                
                <View style={moneyBoxStyle.currentMoneyContainer}>
                    <MoneyText amount={verifiedCurrentAmount} currency={currency} fontSize={12} isCurrencyBold={false}/>
                </View>
            </View>
            <View style={moneyBoxStyle.buttonsContainer}>
                <Button width='50%' color={globalColors.PLAIN_BLUE} size='small' onClick={onTopUpClick}>Top - Up</Button>
                <Button width='50%' color={globalColors.GOOD_GREEN} size='small' onClick={onWithdrawalClick}>Withdrawal</Button>
            </View>
        </UniversalContainer>
    )
}
