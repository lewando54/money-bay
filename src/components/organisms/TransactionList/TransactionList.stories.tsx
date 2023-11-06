/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import Images from '@assets/images'
import { Meta,StoryObj } from '@storybook/react-native'

import TransactionList from './TransactionList'

const meta = {
    component: TransactionList,
    argTypes: {
        transactionsData: {control: 'object'},
        onDate: {control: 'date'}
    }
} satisfies Meta<typeof TransactionList>

export default meta
type Story = StoryObj<typeof TransactionList>

export const Default: Story = {
    args: {
        transactionsData: [
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
        ]
    }
}
