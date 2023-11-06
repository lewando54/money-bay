import React from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList, TabParamList } from '../../../App'
import DashboardTemplate from '../../components/templates/DashboardTemplate/DashboardTemplate'

type Props = CompositeScreenProps<
    BottomTabScreenProps<TabParamList, 'Dashboard'>,
    NativeStackScreenProps<RootStackParamList>
>

export default function DashboardPage({navigation}: Props) {
    const onViewAllPressHandle = () => {
        navigation.navigate('Transaction history')
    }

    const onMakeAPaymentPressHandle = () => {
        console.log('Make A Payment pressed')
    }

    const onMobilePaymentPressHandle = () => {
        navigation.navigate('Mobile payment')
    }

    const onMoneyTransferPressHandle = () => {
        console.log('Money transfer pressed')
    }

    const onTopUpPressHandle = () => {
        console.log('Top-Up pressed')
    }

    return (
        <DashboardTemplate 
            onViewAllPress={onViewAllPressHandle}
            onMakeAPaymentPress={onMakeAPaymentPressHandle}
            onMobilePaymentPress={onMobilePaymentPressHandle}
            onMoneyTransferPress={onMoneyTransferPressHandle}
            onTopUpPress={onTopUpPressHandle}
        />
    )
}