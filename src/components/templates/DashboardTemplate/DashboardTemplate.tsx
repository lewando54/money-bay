import React from 'react'
import dashboardTemplateStyle from './DashboardTemplate.style'
import { Dimensions, ImageBackground, Image, View, Text } from 'react-native'

import Images from 'assets/images'
import GlobalThemeStyle, { GOOD_GREEN, MAIN_DARK, ORANGE, PLAIN_BLUE, WARNING_YELLOW } from '../../../styling/GlobalTheme.style'
import { TCurrency } from '../../../utils/currency'
import { TCardIssuer } from '../../../utils/cardIssuers'
import CreditCard from '../../atoms/CreditCard/CreditCard'
import Pagination from '../../atoms/Pagination/Pagination'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import ButtonCircleWithText from '../../molecules/ButtonCircleWithText/ButtonCircleWithText'
import Separator from '../../atoms/Separator/Separator'
import Link from '../../atoms/Link/Link'
import TransactionBar, { TTransactionsArray } from '../../molecules/TransactionBar/TransactionBar'

const {width, height} = Dimensions.get('screen')

export type TCardsArray = Array<{
    id: number,
    cardIssuer?: TCardIssuer
    cardName?: string
    cardNumber?: string
    cardExpiryDate?: Date
    cardBalance?: number
    cardCurrency?: TCurrency
    testID?: string
}>

interface IDashboardTemplateProps {
    cardsData?: TCardsArray
    transactionsData?: TTransactionsArray
    onTopUpPress?: () => void
    onMobilePaymentPress?: () => void
    onMoneyTransferPress?: () => void
    onMakeAPaymentPress?: () => void
    onViewAllPress?: () => void
    testID?: string
}

export default function DashboardTemplate({
    cardsData=[
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
    onTopUpPress,
    onMobilePaymentPress,
    onMoneyTransferPress,
    onMakeAPaymentPress,
    onViewAllPress,
    testID
}: IDashboardTemplateProps){
    const x = useSharedValue(0)
    const onScrollHandle = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x
        }
    })

    const TransactionList = transactionsData.map((item, index) => 
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
        <View style={dashboardTemplateStyle.mainContainer}>
            <View>
                <ImageBackground source={Images.bgDashboard} style={dashboardTemplateStyle.imageBackgroundContainer}>
                    <View style={dashboardTemplateStyle.headerContainer}>
                        <Image source={Images.profileIcon} style={dashboardTemplateStyle.miniProfileIcon}/>
                        <Text style={dashboardTemplateStyle.currencyValue}>€ 1.08 / 1.12</Text>
                        <Images.creditCardSVG />
                    </View>
                    <Animated.FlatList
                        data={cardsData}
                        style={dashboardTemplateStyle.cardsList}
                        renderItem={({item, index}) => <View style={{marginRight: 20 + (index == cardsData.length - 1 && width * 0.1759), height: height * 0.1660}}><CreditCard
                            cardIssuer={item.cardIssuer}
                            cardName={item.cardName}
                            cardNumber={item.cardNumber}
                            cardExpiryDate={item.cardExpiryDate}
                            cardBalance={item.cardBalance}
                            cardCurrency={item.cardCurrency}
                        /></View>}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        pagingEnabled
                        snapToAlignment='start'
                        showsHorizontalScrollIndicator={false}
                        overScrollMode='auto'
                        onScroll={onScrollHandle}
                        viewabilityConfig={{
                            viewAreaCoveragePercentThreshold: 20
                        }}
                    />
                    <Pagination data={cardsData} color='white' x={x} itemLengthPercent={0.7733}/>
                </ImageBackground>
            </View>
            <View style={dashboardTemplateStyle.buttonsAndPaymentsContainer}>
                <View style={dashboardTemplateStyle.buttonsContainer}>
                    <ButtonCircleWithText 
                        circleBackgroundColor={GOOD_GREEN}
                        icon={<Images.topUpSVG/>}
                        onClick={onTopUpPress}
                        text='Top-Up Payment'
                    />
                    <ButtonCircleWithText 
                        circleBackgroundColor={ORANGE}
                        icon={<Images.smartphoneSVG/>}
                        onClick={onMobilePaymentPress}
                        text='Mobile Payment'
                    />
                    <ButtonCircleWithText 
                        circleBackgroundColor={PLAIN_BLUE}
                        icon={<Images.repeatSVG/>}
                        onClick={onMoneyTransferPress}
                        text='Money Transfer'
                    />
                    <ButtonCircleWithText 
                        circleBackgroundColor={WARNING_YELLOW}
                        icon={<Images.dollarSignSVG/>}
                        onClick={onMakeAPaymentPress}
                        text='Make a Payment'
                    />
                </View>
                <Separator />
                <View style={dashboardTemplateStyle.latestTransactionContainer}>
                    <View style={dashboardTemplateStyle.latestTransactionHeadingContainer}>
                        <Text style={dashboardTemplateStyle.latestTransactionHeading}>Latest transactions</Text>
                        <Link style={dashboardTemplateStyle.latestTransactionViewAllLink} onPress={onViewAllPress}>View all</Link>
                    </View>
                    {TransactionList}
                </View>
            </View>
        </View>
    )
}
