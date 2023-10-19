import React from 'react'
import DashboardTemplate from '../../components/templates/DashboardTemplate/DashboardTemplate'

export default function DashboardPage({navigation}) {
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