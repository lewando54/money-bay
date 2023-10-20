/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { StoryObj, Meta } from '@storybook/react-native'
import Images from '@assets/images'
import DashboardTemplate from './DashboardTemplate'

const meta = {
    component: DashboardTemplate,
    argTypes: {
        cardsData: {control: 'object'},
        transactionsData: {control: 'object'},
        onTopUpPress: {action: 'onTopUp Pressed'},
        onMobilePaymentPress: {action: 'onMobilePayment Pressed'},
        onMoneyTransferPress: {action: 'onMoneyTransfer Pressed'},
        onMakeAPaymentPress: {action: 'onMakeAPayment Pressed'},
        onViewAllPress: {action: 'onViewAll Pressed'}
    }
} satisfies Meta<typeof DashboardTemplate>

export default meta
type Story = StoryObj<typeof DashboardTemplate>

export const Default: Story = {
    args: {
        cardsData: [
            {
                id: 0,
                cardIssuer: 'visa',
                cardName: 'bay platinum',
                cardNumber: '1234 **** **** 1234',
                cardExpiryDate: new Date('2023-12-19'),
                cardBalance: 4863.27,
                cardCurrency: {iso: 'usd', symbol: '$', left: true},
                testID: 'creditcard' + 0
            },
            {
                id: 1,
                cardIssuer: 'mastercard',
                cardName: 'teofin',
                cardNumber: '4321 **** **** 4321',
                cardExpiryDate: new Date('2023-12-19'),
                cardBalance: 4999.20,
                cardCurrency: {iso: 'usd', symbol: '$', left: true},
                testID: 'creditcard' + 1
            },
            {
                id: 2,
                cardIssuer: 'visa',
                cardName: 'savings',
                cardNumber: '6969 **** **** 4200',
                cardExpiryDate: new Date('2023-12-19'),
                cardBalance: 20123.21,
                cardCurrency: {iso: 'usd', symbol: '$', left: true},
                testID: 'creditcard' + 2
            }
        ],
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
        ],
    }
}
