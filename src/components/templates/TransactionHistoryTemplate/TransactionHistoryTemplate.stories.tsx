/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { Meta,StoryObj } from '@storybook/react-native'

import Images from '@assets/images'

import TransactionHistory from './TransactionHistoryTemplate'

import { ORANGE } from '@styling/GlobalTheme.style'

const meta = {
    component: TransactionHistory,
    argTypes: {
        transactionsData: {control: 'object'},
        date: {control: 'date'}
    }
} satisfies Meta<typeof TransactionHistory>

export default meta
type Story = StoryObj<typeof TransactionHistory>

export const Default: Story = {
    args: {
        transactionsData: [
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
                icon: <Images.atmSVG />,
                title: '+17869871235',
                subTitle: 'Mobile payments',
                amount: 10,
                date: new Date('2022-9-5'),
            },
        ],
        date: new Date('2022-12-02')
    }
}
