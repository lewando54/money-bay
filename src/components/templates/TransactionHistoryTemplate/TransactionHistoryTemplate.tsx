import React from 'react'
import { FlatList,Text, View } from 'react-native'

import Images from '@assets/images'
import { SearchInput } from '@molecules'
import { TransactionList } from '@organisms'
import { TTransactionsArray } from 'src/components/molecules/TransactionBar/TransactionBar'

import transactionHistoryStyle from './TransactionHistoryTemplate.style'

import { globalColors } from '@styling/GlobalTheme.style'

interface ITransactionHistoryProps {
    transactionsData?: TTransactionsArray
    date?: Date
    testID?: string
}

export default function TransactionHistory({
    transactionsData=[
        {
            icon: <Images.transferLineSVG />,
            title: 'Adalyn Roth',
            subTitle: 'Money transfer',
            amount: 140,
            date: new Date('2023-12-02T00:00:00.000Z')
        },
        {
            icon: <Images.amazonSVG />,
            title: 'Amazon',
            subTitle: 'Online payments',
            amount: 239.57,
            date: new Date('2023-12-02T00:00:00.000Z')
        },
        {
            icon: <Images.payPalSVG />,
            title: 'Paypal',
            subTitle: 'Deposits',
            amount: 700,
            date: new Date('2022-09-10T00:00:00.000Z'),
            isExpense: false
        },
        {
            icon: <Images.atmSVG />,
            title: 'ATM',
            subTitle: 'Cash withdrawal',
            amount: 1200,
            date: new Date('2022-09-10T00:00:00.000Z'),
        },
        {
            icon: <Images.ebaySVG />,
            title: 'eBay',
            subTitle: 'Online payments',
            amount: 287.84,
            date: new Date('2022-09-10T00:00:00.000Z'),
        },
        {
            icon: <Images.smartphoneSVG color={globalColors.ORANGE}/>,
            title: '+17869871235',
            subTitle: 'Mobile payments',
            amount: 10,
            date: new Date('2022-09-05T00:00:00.000Z'),
        },
        {
            icon: <Images.atmSVG />,
            title: '+17869871235',
            subTitle: 'Mobile payments',
            amount: 10,
            date: new Date('2022-09-05T00:00:00.000Z'),
        },
    ],
    date=new Date('2023-12-02T00:00:00.000Z'),
    testID
}: ITransactionHistoryProps){
    let actDate = date
    let prevDate = date

    return (
        <View style={transactionHistoryStyle.mainContainer} testID={testID}>
            <View style={transactionHistoryStyle.searchContainer}>
                <SearchInput/>
            </View>
            <FlatList
                data={transactionsData}
                ListEmptyComponent={<Text style={transactionHistoryStyle.dateText}>No transactions</Text>}
                renderItem={({item, index}) => {
                    actDate = item.date
                    if(index == 0 && actDate == item.date){
                        prevDate = actDate
                        return (
                            <View key={index} style={transactionHistoryStyle.innerContainer}>
                                <Text style={transactionHistoryStyle.dateText}>Today</Text>
                                <TransactionList onDate={item.date} transactionsData={transactionsData}/>
                            </View>
                        )
                    }
                    if(prevDate.toISOString() != actDate.toISOString()){
                        const sameYear = date.getFullYear() == item.date.getFullYear()
                        const dateFromString = item.date.toLocaleDateString('en-US', 
                            sameYear ? { month: 'short', day: 'numeric' } :
                                { year: 'numeric', month: 'short', day: 'numeric' }
                        )
                        prevDate = actDate
                        return (
                            <View key={index} style={transactionHistoryStyle.innerContainer}>
                                <Text style={transactionHistoryStyle.dateText}>{dateFromString}</Text>
                                <TransactionList onDate={item.date} transactionsData={transactionsData}/>
                            </View>
                        )
                    }
                }}
            />
        </View>
    )
}
