import { View, Text } from 'react-native'
import React from 'react'
import TransactionHistoryTemplate from '../../components/templates/TransactionHistoryTemplate/TransactionHistoryTemplate'
import Images from 'assets/images'
import { ORANGE } from '../../styling/GlobalTheme.style'

export default function TransactionHistoryPage() {
    const transactionsData = [
        {
            icon: <Images.transferLineSVG />,
            title: 'Adalyn Roth',
            subTitle: 'Money transfer',
            amount: 140,
            date: new Date('2023-12-02')
        },
        {
            icon: <Images.amazonSVG />,
            title: 'Amazon',
            subTitle: 'Online payments',
            amount: 239.57,
            date: new Date('2023-12-02')
        },
        {
            icon: <Images.payPalSVG />,
            title: 'Paypal',
            subTitle: 'Deposits',
            amount: 700,
            date: new Date('2022-9-10'),
            isExpense: false
        },
        {
            icon: <Images.atmSVG />,
            title: 'ATM',
            subTitle: 'Cash withdrawal',
            amount: 1200,
            date: new Date('2022-9-10'),
        },
        {
            icon: <Images.ebaySVG />,
            title: 'eBay',
            subTitle: 'Online payments',
            amount: 287.84,
            date: new Date('2022-9-10'),
        },
        {
            icon: <Images.smartphoneSVG color={ORANGE}/>,
            title: '+17869871235',
            subTitle: 'Mobile payments',
            amount: 10,
            date: new Date('2022-9-5'),
        },
        {
            icon: <Images.transferLineSVG />,
            title: 'Maribel Farrell',
            subTitle: 'Money transfer',
            amount: 568,
            isExpense: false,
            date: new Date('2022-9-5'),
        },
        {
            icon: <Images.homeSVG />,
            title: 'Electricity',
            subTitle: 'Utility bills',
            amount: 198.27,
            date: new Date('2022-9-5'),
        },
        {
            icon: <Images.homeSVG />,
            title: 'Electricity',
            subTitle: 'Utility bills',
            amount: 198.27,
            date: new Date('2022-8-5'),
        },
    ]

    return (
        <TransactionHistoryTemplate transactionsData={transactionsData} date={new Date('2023-12-02')}/>
    )
}