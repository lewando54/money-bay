import React from 'react'
import {  View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import Images from '@assets/images'
import { CustomText } from '@atoms'
import InfoScreenPageStyle from '@pages/InfoScreenPage/InfoScreenPage.style'
import { InfoScreenTemplate } from '@templates'
import { RootStackParamList } from 'App'

import paymentSuccessPageStyle from './PaymentSuccessPage.style'

import { globalColors } from '@styling/GlobalTheme.style'

type Props = NativeStackScreenProps<RootStackParamList, 'Payment success'>

export default function PaymentSuccessPage({route, navigation}: Props) {
    const { wholeAmount, decimalAmount } = route.params

    return (
        <InfoScreenTemplate
            icon={<Images.infoSuccessSVG/>}
            title={'Success!'}
            titleColor={globalColors.GOOD_GREEN}
            body={
                <View>
                    <View style={paymentSuccessPageStyle.moneyTextContainer}>
                        <CustomText style={paymentSuccessPageStyle.moneyBigText}>$ {wholeAmount}.</CustomText>
                        <CustomText style={paymentSuccessPageStyle.moneySmallText}>{parseInt(decimalAmount).toLocaleString('en-US', {minimumIntegerDigits: 2})}</CustomText>
                    </View>
                    <CustomText style={InfoScreenPageStyle.bodyText}>
                        Your payment has been processed!
                    </CustomText>
                </View>
            }
            additionalButtons={[
                {
                    children: 'Send Receipt',
                    color: 'secondary',
                    onClick: () => navigation.navigate('Transaction details', {
                        wholeAmount,
                        decimalAmount
                    })
                }
            ]}
            onSubmit={() => navigation.navigate('Main')}
        />
    )
}

