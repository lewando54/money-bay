import React from 'react'
import { View, Text } from 'react-native'
import { TCurrency } from '../../../utils/currency'
import UniversalContainer from '../../atoms/UniversalContainer/UniversalContainer'
import moneyBoxStyle from './MoneyBox.style'
import { ProgressBar } from 'react-native-paper'
import globalThemeStyle, { GOOD_GREEN, MAIN_DARK, PLAIN_BLUE } from '../../../styling/GlobalTheme.style'
import PiggyBank from './assets/piggy-bank.svg'
import Button from '../../atoms/Button/Button'
import MoneyText from '../../atoms/MoneyText/MoneyText'

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
                <Text style={[globalThemeStyle.text_Regular, {color: MAIN_DARK}]}>{name}</Text>
                <MoneyText amount={verifiedGoalAmount} currency={currency} containerStyle={{marginLeft: 'auto'}}/>
            </View>
            <View>
                <ProgressBar progress={(verifiedCurrentAmount/verifiedGoalAmount)} style={{borderRadius: 10, height: 5}} color={GOOD_GREEN}/>
                
                <View style={moneyBoxStyle.currentMoneyContainer}>
                    <MoneyText amount={verifiedCurrentAmount} currency={currency} fontSize={12} isCurrencyBold={false}/>
                </View>
            </View>
            <View style={moneyBoxStyle.buttonsContainer}>
                <Button width='50%' color={PLAIN_BLUE} size='small' onClick={onTopUpClick}>Top - Up</Button>
                <Button width='50%' color={GOOD_GREEN} size='small' onClick={onWithdrawalClick}>Withdrawal</Button>
            </View>
        </UniversalContainer>
    )
}
