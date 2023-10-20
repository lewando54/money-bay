import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import CircleWithIcon from '../../atoms/CircleWithIcon/CircleWithIcon'
import UniversalContainer from '../../atoms/UniversalContainer/UniversalContainer'
import transactionBarStyle from './TransactionBar.style'
import { MaterialIcons } from '@expo/vector-icons'
import globalThemeStyle, { GOOD_GREEN } from '../../../styling/GlobalTheme.style'

export type TTransactionsArray = Array<{
    icon: React.ReactNode,
    title: string,
    subTitle: string,
    amount: number,
    date: Date,
    percent?: number,
    isExpense?: boolean,
    testID?: string
}>

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
    const {width} = Dimensions.get('screen')

    return (
        <UniversalContainer padding={width * 0.0266} testID={testID} style={transactionBarStyle.container} castShadow={true}>
            <CircleWithIcon icon={icon} size={width * 0.1066}/>
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
