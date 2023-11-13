import React from 'react'
import { Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import Images from '@assets/images'

import { RootStackParamList } from '../../../App'
import InfoScreenTemplate from '../../components/templates/InfoScreenTemplate/InfoScreenTemplate'

import { MAIN_DARK } from '../../styling/GlobalTheme.style'
import InfoScreenPageStyle from '../InfoScreenPage/InfoScreenPage.style'

type Props = NativeStackScreenProps<RootStackParamList, 'Account success'>

export default function AccountSuccessPage({navigation}: Props) {
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