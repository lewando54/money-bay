import React from 'react'
import TransactionBar, { TTransactionsArray } from '../../molecules/TransactionBar/TransactionBar'
import transactionListStyle from './TransactionList.style'
import Images from 'assets/images'
import { View } from 'react-native'

interface ITransactionListProps {
    transactionsData?: TTransactionsArray
    onDate?: Date
}

export default function TransactionList({
    transactionsData=[
        {
            icon: <Images.transferLineSVG />,
            title: 'Adalyn Roth',
            subTitle: 'Money transfer',
            amount: 140,
            date: new Date('2022-12-02')
        },
        {
            icon: <Images.amazonSVG />,
            title: 'Amazon',
            subTitle: 'Online payments',
            amount: 239.57,
            date: new Date('2022-12-02')
        },
        {
            icon: <Images.payPalSVG />,
            title: 'Paypal',
            subTitle: 'Deposits',
            amount: 700,
            date: new Date('2022-9-10'),
            isExpense: false
        },
    ],
    onDate
}: ITransactionListProps){

    const TransactionListEl = transactionsData.map((item, index) => 
        <TransactionBar
            key={index}
            title={item.title}
            subTitle={item.subTitle}
            amount={item.amount}
            isExpense={item.isExpense}
            icon={item.icon}
        />
    )

    if(onDate){
        const TransactionListFiltered = transactionsData.filter((item) => 
            item.date.toISOString() == onDate.toISOString()
        ).map((item, index) => 
            <TransactionBar
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                amount={item.amount}
                isExpense={item.isExpense}
                icon={item.icon}
            />
        )
        return (
            <View style={transactionListStyle.transactionsContainer}>
                {TransactionListFiltered}
            </View>
        )
    }

    return (
        <View style={transactionListStyle.transactionsContainer}>
            {TransactionListEl}
        </View>
    )
}
