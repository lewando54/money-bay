import { Text } from 'react-native'
import React from 'react'
import InfoScreenTemplate from '../../components/templates/InfoScreenTemplate/InfoScreenTemplate'
import { MAIN_DARK } from '../../styling/GlobalTheme.style'
import Images from 'assets/images'
import InfoScreenPageStyle from '../InfoScreenPage/InfoScreenPage.style'

export default function AccountSuccessPage({navigation}) {
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