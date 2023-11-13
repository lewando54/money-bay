import React from 'react'
import { Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import Images from '@assets/images'

import { RootStackParamList } from '../../../App'
import InfoScreenTemplate from '../../components/templates/InfoScreenTemplate/InfoScreenTemplate'

import { GOOD_GREEN } from '../../styling/GlobalTheme.style'
import InfoScreenPageStyle from '../InfoScreenPage/InfoScreenPage.style'
import paymentSuccessPageStyle from './PaymentSuccessPage.style'

type Props = NativeStackScreenProps<RootStackParamList, 'Payment success'>

export default function PaymentSuccessPage({route, navigation}: Props) {
    const { wholeAmount, decimalAmount } = route.params

    return (
        <InfoScreenTemplate
            icon={<Images.infoSuccessSVG/>}
            title={'Success!'}
            titleColor={GOOD_GREEN}
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

