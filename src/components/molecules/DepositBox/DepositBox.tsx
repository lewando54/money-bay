import { View, Image, Text } from 'react-native'
import { TCurrency } from '../../../utils/currency'
import UniversalContainer from '../../atoms/UniversalContainer/UniversalContainer'
import depositBoxStyle from './DepositBox.style'
import globalThemeStyle, { BODY_TEXT_COLOR, GOOD_GREEN, MAIN_DARK, ORANGE, PLAIN_BLUE } from '../../../styling/GlobalTheme.style'
import SafeDeposit from './assets/safe-deposit.svg'
import Check from './assets/check.svg'
import Button from '../../atoms/Button/Button'
import CircleWithIcon from '../../atoms/CircleWithIcon/CircleWithIcon'

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
    const dateFromString = dateFrom.toLocaleDateString(undefined, 
        sameYear ? { month: 'short', day: 'numeric' } :
            { year: 'numeric', month: 'short', day: 'numeric' }
    )
    const dateToString = dateTo.toLocaleDateString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric'
    })
    const VarButton = 
        isFinished ? 
            <Button width='50%' color={ORANGE} size='small' onClick={onExtendClick}>Extend</Button> : 
            <Button width='50%' color={PLAIN_BLUE} size='small' onClick={onTopUpClick}>Top - Up</Button>
    const icon = 
        isFinished ?
            <CircleWithIcon size={22} backgroundColor={GOOD_GREEN} icon={<Check />}/> :
            <SafeDeposit />

    return (
        <UniversalContainer testID={testID} style={depositBoxStyle.container} castShadow={true}>
            <View style={depositBoxStyle.titleAndMoneyContainer}>
                {icon}
                <View style={depositBoxStyle.moneyAndDateContainer}>
                    <View style={depositBoxStyle.moneyContainer}>
                        <Text style={[globalThemeStyle.text_Regular, {fontSize: 20, color: MAIN_DARK}]}>{Math.floor(currentAmount)}.</Text>
                        <View style={depositBoxStyle.floatCurrencyContainer}>
                            <Text style={[globalThemeStyle.text_Regular, {fontSize: 14, color: MAIN_DARK}]}>{((currentAmount * 100) % 100).toLocaleString(undefined, {minimumIntegerDigits: 2})}</Text>
                            <Text style={[globalThemeStyle.text_Bold, {fontSize: 14, color: MAIN_DARK, marginLeft: 4}]}>{currency.iso.toLocaleUpperCase()}</Text>
                        </View>
                    </View>
                    <Text style={[globalThemeStyle.text_Regular, {color: BODY_TEXT_COLOR, fontSize: 12}]}>{dateFromString} - {dateToString}</Text>
                </View>
                <View style={depositBoxStyle.percentContainer}>
                    <Text style={[globalThemeStyle.text_SemiBold, {fontSize: 16, color: MAIN_DARK}]}>{percent}%</Text>
                    <Text style={[globalThemeStyle.text_SemiBold, {fontSize: 12, color: GOOD_GREEN}]}>+ {interest.toLocaleString(undefined, {minimumIntegerDigits: 2})}</Text>
                </View>
            </View>
            <View style={depositBoxStyle.buttonsContainer}>
                {VarButton}
                <Button width='50%' color={GOOD_GREEN} size='small' onClick={onWithdrawalClick}>Withdrawal</Button>
            </View>
        </UniversalContainer>
    )
}