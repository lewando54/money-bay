import React from 'react'
import TransactionDetailsTemplate from '../../components/templates/TransactionDetailsTemplate/TransactionDetailsTemplate'
import { View, Text } from 'react-native'
import Images from '@assets/images'
import globalThemeStyle, { GOOD_GREEN } from '../../styling/GlobalTheme.style'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../App'

type Props = NativeStackScreenProps<RootStackParamList, 'Transaction details'>

export default function TransactionDetailsPage({route, navigation}: Props) {
    const {wholeAmount, decimalAmount} = route.params

    const onDownloadPDFPressHandle = () => {
        console.log('Pressed Donwload PDF')
        navigation.navigate('Main')
    }

    return (
        <TransactionDetailsTemplate
            onDownloadPDFPress={onDownloadPDFPressHandle}
            wholeAmount={wholeAmount}
            decimalAmount={decimalAmount}
            statusElement={<View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}><Images.successDetailsSVG/><Text style={{...globalThemeStyle.text_SemiBold, color: GOOD_GREEN, fontSize: 14}}>Success</Text></View>}
        />
    )
}