import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import Images from '@assets/images'
import { CustomText } from '@atoms'
import { InfoScreenPageStyle } from '@pages'
import { InfoScreenTemplate } from '@templates'
import { RootStackParamList } from 'App'

import { globalColors } from '@styling/GlobalTheme.style'


type Props = NativeStackScreenProps<RootStackParamList, 'Account success'>

export default function AccountSuccessPage({navigation}: Props) {
    return (
        <InfoScreenTemplate
            icon={<Images.accountSuccessSVG/>}
            title='Account created!'
            titleColor={globalColors.MAIN_DARK}
            body={<CustomText style={InfoScreenPageStyle.bodyText}>Your account has been created successfully.</CustomText>}
            onSubmit={() => navigation.navigate('Sign In')}
        />
    )
}