import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../../../App'
import MobilePaymentTemplate from '../../components/templates/MobilePaymentTemplate/MobilePaymentTemplate'

type Props = NativeStackScreenProps<RootStackParamList, 'Mobile payment'>

export default function MobilePaymentPage({navigation}: Props) {
    const [phone, setPhone] = useState('')
    const [wholeAmount, setWholeAmount] = useState('0')
    const [decimalAmount, setDecimalAmount] = useState('00')

    const onSubmitHandle = () => {
        if(phone != '' && wholeAmount != '0' && wholeAmount != '' && decimalAmount != ''){
            console.log('Payment: ', wholeAmount+'.'+decimalAmount, phone)
            navigation.navigate('Payment success', {
                wholeAmount: wholeAmount,
                decimalAmount: decimalAmount,
                phoneNumber: phone
            })
        }
    }

    return (
        <MobilePaymentTemplate
            onSubmit={onSubmitHandle}
            phoneValue={phone}
            onPhoneChange={(newValue) => setPhone(newValue)}
            decimalValue={decimalAmount}
            onDecimalChange={(newValue) => setDecimalAmount(newValue)}
            wholeValue={wholeAmount}
            onWholeChange={(newValue) => setWholeAmount(newValue)}
        />
    )
}