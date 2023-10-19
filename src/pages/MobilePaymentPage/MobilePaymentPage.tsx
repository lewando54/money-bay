import React, { useState } from 'react'
import MobilePaymentTemplate from '../../components/templates/MobilePaymentTemplate/MobilePaymentTemplate'

export default function MobilePaymentPage({navigation}) {
    //const [amount, setAmount] = useState(0)
    const [phone, setPhone] = useState('')
    const [wholeAmount, setWholeAmount] = useState('0')
    const [decimalAmount, setDecimalAmount] = useState('00')

    const onSubmitHandle = () => {
        //setAmount(() => parseInt(wholeAmount) + (parseInt(decimalAmount) / 100))
        navigation.navigate('Payment success', {
            wholeAmount: wholeAmount,
            decimalAmount: decimalAmount,
            phoneNumber: phone
        })
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