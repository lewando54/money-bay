import { Text, View } from 'react-native'
import React from 'react'
import InfoScreenTemplate from '../../components/templates/InfoScreenTemplate/InfoScreenTemplate'
import { GOOD_GREEN } from '../../styling/GlobalTheme.style'
import Images from 'assets/images'
import InfoScreenPageStyle from '../InfoScreenPage/InfoScreenPage.style'

export default function PaymentSuccessPage({route, navigation}) {
    const { wholeAmount, decimalAmount, phoneNumber } = route.params

    return (
        <InfoScreenTemplate
            icon={<Images.infoSuccessSVG/>}
            title={'Success!'}
            titleColor={GOOD_GREEN}
            body={
                <View>
                    <View>
                        <Text>$ {wholeAmount}.</Text>
                        <Text>{decimalAmount}</Text>
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
                        decimalAmount,
                        phoneNumber
                    })
                }
            ]}
            onSubmit={() => navigation.navigate('Main')}
        />
    )
}

