import React from 'react'
import { Text,View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import Images from '@assets/images'
import { TransactionDetailsTemplate } from '@templates'
import { RootStackParamList } from 'App'

import globalThemeStyle, { globalColors } from '@styling/GlobalTheme.style'

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
            statusElement={<View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}><Images.successDetailsSVG/><Text style={{...globalThemeStyle.text_SemiBold, color: globalColors.GOOD_GREEN, fontSize: 14}}>Success</Text></View>}
        />
    )
}