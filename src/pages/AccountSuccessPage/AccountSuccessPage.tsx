import { Text } from 'react-native'
import React from 'react'
import InfoScreenTemplate from '../../components/templates/InfoScreenTemplate/InfoScreenTemplate'
import { MAIN_DARK } from '../../styling/GlobalTheme.style'
import Images from '@assets/images'
import InfoScreenPageStyle from '../InfoScreenPage/InfoScreenPage.style'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../App'

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