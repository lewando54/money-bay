import React from 'react'
import { Dimensions, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { CustomText } from '@atoms'
import { CircleWithIcon,UniversalContainer } from '@atoms'

import transactionBarStyle from './TransactionBar.style'

import globalThemeStyle, { globalColors } from '@styling/GlobalTheme.style'

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
                <CustomText style={globalThemeStyle.text_Title}>{title}</CustomText>
                <CustomText style={globalThemeStyle.text_SubTitle}>{subTitle}</CustomText>
            </View>
            <View style={transactionBarStyle.balanceContainer}>
                <CustomText style={[globalThemeStyle.text_Title, !isExpense && {color: globalColors.GOOD_GREEN}]}>{isExpense ? '-' : '+'}</CustomText>
                <View>
                    <CustomText style={[globalThemeStyle.text_Title, !isExpense && {color: globalColors.GOOD_GREEN}]}>{amount.toFixed(2)}</CustomText>
                    <CustomText style={[globalThemeStyle.text_SubTitle, {marginLeft: 'auto'}, !percent && {display: 'none'}]}>{percent+'%'}</CustomText>
                </View>
            </View>
        </UniversalContainer>
    )
}
