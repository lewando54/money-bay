﻿import { View, Text } from 'react-native'
import CircleWithIcon from '../../atoms/CircleWithIcon/CircleWithIcon'
import UniversalContainer from '../../atoms/UniversalContainer/UniversalContainer'
import transactionBarStyle from './TransactionBar.style'
import { MaterialIcons } from '@expo/vector-icons'
import globalThemeStyle, { BODY_TEXT_COLOR, GOOD_GREEN, MAIN_DARK } from '../../../styling/GlobalTheme.style'

interface ITransactionBarProps {
    icon?: React.ReactNode
    title?: string
    subTitle?: string
    amount?: number
    percent?: number
    isExpense?: boolean
    testID?: string
}

export default function TransactionBar({
    icon=<MaterialIcons name="compare-arrows" size={24} color="black" />,
    title='Adalyn Roth',
    subTitle='Money transfer',
    amount=140.00,
    percent,
    isExpense=true,
    testID
}: ITransactionBarProps){
    return (
        <UniversalContainer testID={testID} style={transactionBarStyle.container}>
            <CircleWithIcon icon={icon} size={40}/>
            <View>
                <Text style={globalThemeStyle.text_Title}>{title}</Text>
                <Text style={globalThemeStyle.text_SubTitle}>{subTitle}</Text>
            </View>
            <View style={transactionBarStyle.balanceContainer}>
                <Text style={[globalThemeStyle.text_Title, !isExpense && {color: GOOD_GREEN}]}>{isExpense ? '-' : '+'}</Text>
                <View>
                    <Text style={[globalThemeStyle.text_Title, !isExpense && {color: GOOD_GREEN}]}>{amount.toFixed(2)}</Text>
                    <Text style={[globalThemeStyle.text_SubTitle, {marginLeft: 'auto'}, !percent && {display: 'none'}]}>{percent+'%'}</Text>
                </View>
            </View>
        </UniversalContainer>
    )
}