import { View, Image, Text } from 'react-native'
import { TCurrency } from '../../../utils/currency'
import UniversalContainer from '../../atoms/UniversalContainer/UniversalContainer'
import moneyBoxStyle from './MoneyBox.style'
import { ProgressBar } from 'react-native-paper'
import globalThemeStyle, { GOOD_GREEN, MAIN_DARK, PLAIN_BLUE } from '../../../styling/GlobalTheme.style'
import PiggyBank from './assets/piggy-bank.svg'
import Button from '../../atoms/Button/Button'

interface IMoneyBoxProps {
    goalAmount?: number
    currentAmount?: number
    name?: string
    currency?: TCurrency
    testID?: string
}

export default function MoneyBox({
    goalAmount=1200,
    currentAmount=650.27,
    name='New iPhone Pro Max',
    currency={iso: 'usd', symbol: '$', left: true},
    testID
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
                <View style={moneyBoxStyle.goalContainer}>
                    <Text style={[globalThemeStyle.text_Regular, {fontSize: 20, color: MAIN_DARK}]}>{Math.floor(verifiedGoalAmount)}.</Text>
                    <View style={moneyBoxStyle.floatCurrencyContainer}>
                        <Text style={[globalThemeStyle.text_Regular, {fontSize: 14, color: MAIN_DARK}]}>{((verifiedGoalAmount * 100) % 100).toLocaleString(undefined, {minimumIntegerDigits: 2})}</Text>
                        <Text style={[globalThemeStyle.text_Bold, {fontSize: 14, color: MAIN_DARK, marginLeft: 4}]}>{currency.iso.toLocaleUpperCase()}</Text>
                    </View>
                </View>
            </View>
            <View>
                <ProgressBar progress={(verifiedCurrentAmount/verifiedGoalAmount)} style={{borderRadius: 10, height: 5}} color={GOOD_GREEN}/>
                <View style={moneyBoxStyle.currentMoneyContainer}>
                    <Text style={[globalThemeStyle.text_SubTitle, {fontSize: 12}]}>{Math.floor(verifiedCurrentAmount)}.</Text>
                    <View style={moneyBoxStyle.floatCurrentCurrencyContainer}>
                        <Text style={[globalThemeStyle.text_SubTitle, {fontSize: 8}]}>{((verifiedCurrentAmount * 100) % 100).toLocaleString(undefined, {minimumIntegerDigits: 2})}</Text>
                        <Text style={[globalThemeStyle.text_SubTitle, {fontSize: 8, marginLeft: 3}]}>{currency.iso.toLocaleUpperCase()}</Text>
                    </View>
                </View>
            </View>
            <View style={moneyBoxStyle.buttonsContainer}>
                <Button width='50%' color={PLAIN_BLUE} size='small'>Top - Up</Button>
                <Button width='50%' color={GOOD_GREEN} size='small'>Withdrawal</Button>
            </View>
        </UniversalContainer>
    )
}
