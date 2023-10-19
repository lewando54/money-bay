import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import InfoScreenTemplate from '../../components/templates/InfoScreenTemplate/InfoScreenTemplate'
import { GOOD_GREEN, MAIN_DARK } from '../../styling/GlobalTheme.style'
import Images from 'assets/images'
import InfoScreenPageStyle from './InfoScreenPage.style'

export default function InfoScreenPage({route, navigation}) {
    const { type } = route.params
    if(type == 'accountSuccess'){
        return (
            <InfoScreenTemplate
                icon={<Images.accountSuccessSVG/>}
                title='Account created!'
                titleColor={MAIN_DARK}
                body={<Text style={InfoScreenPageStyle.bodyText}>Your account has been created successfully.</Text>}
                onSubmit={() => navigation.navigate('Sign In')}
            />
        )
    }
    else if(type == 'paymentSuccess'){
        return (
            <InfoScreenTemplate
                icon={<Images.paymentSuccessSVG/>}
                title={'Success!'}
                titleColor={GOOD_GREEN}
                body={
                    <View>
                        <View>
                            <Text>$ 10.</Text>
                            <Text>.00</Text>
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
                        onClick: () => navigation.navigate('Transaction details')
                    }
                ]}
                onSubmit={() => navigation.navigate('Main')}
            />
        )
    }  
}