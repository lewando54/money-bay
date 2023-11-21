import React from 'react'
import { Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import Images from '@assets/images'
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
                        <Text style={paymentSuccessPageStyle.moneyBigText}>$ {wholeAmount}.</Text>
                        <Text style={paymentSuccessPageStyle.moneySmallText}>{parseInt(decimalAmount).toLocaleString('en-US', {minimumIntegerDigits: 2})}</Text>
                    </View>
                    <Text style={InfoScreenPageStyle.bodyText}>
                        Your payment has been processed!
                    </Text>
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

