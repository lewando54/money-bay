import React, { useRef } from 'react'
import { Platform,Text, TextInput, View } from 'react-native'

import { Button, UniversalContainer } from '@atoms'
import { PhoneInput } from '@molecules'
import { TCurrency } from '@utils/currency'

import mobilePaymentTemplateStyle from './MobilePaymentTemplate.style'

interface IMobilePaymentTemplateProps {
    balance?: number
    currency?: TCurrency
    phoneValue?: string
    wholeValue?: string
    decimalValue?: string
    onPhoneChange?: (newValue: string) => void
    onWholeChange?: (newValue: string) => void
    onDecimalChange?: (newValue: string) => void
    onSubmit?: () => void
    testID?: string
}

export default function MobilePaymentTemplate({
    balance=4863.27,
    currency={iso: 'usd', symbol: '$', left: true},
    phoneValue,
    wholeValue,
    decimalValue,
    onPhoneChange,
    onWholeChange,
    onDecimalChange,
    onSubmit,
    testID
}: IMobilePaymentTemplateProps){

    const amountWholeRef = useRef<TextInput>()
    const amountDecimalRef = useRef<TextInput>()

    const onAmountWholeChangeHandle = (newValue: string) => {
        if(newValue.includes(',') || newValue.includes('.')){
            newValue = newValue.replace(',', '')
            newValue = newValue.replace('.', '')
            amountWholeRef.current.setNativeProps({
                text: newValue
            })
            amountDecimalRef.current.focus()
        }
        else if(newValue.includes('-')){
            newValue = newValue.replace('-', '')
            amountWholeRef.current.setNativeProps({
                text: newValue
            })
        }
        if(onWholeChange){
            onWholeChange(newValue)
        }
    }

    const onAmountDecimalChangeHandle = (newValue: string) => {
        if(newValue.includes(',') || newValue.includes('.') || newValue.includes('-')){
            newValue = newValue.replace(',', '')
            newValue = newValue.replace('.', '')
            newValue = newValue.replace('-', '')
            amountDecimalRef.current.setNativeProps({
                text: newValue
            })
        }
        if(onDecimalChange){
            onDecimalChange(newValue)
        }
    }

    return (
        <View style={mobilePaymentTemplateStyle.mainContainer} testID={testID}>
            <PhoneInput
                value={phoneValue}
                onChange={onPhoneChange}
            />
            <Text style={mobilePaymentTemplateStyle.balanceText}>Your balance: {balance+' '+currency.iso.toLocaleUpperCase()}</Text>
            <View style={mobilePaymentTemplateStyle.amountInputWrapper}>
                <UniversalContainer style={mobilePaymentTemplateStyle.moneyInputContainer} castShadow={true}>
                    <Text style={[mobilePaymentTemplateStyle.bigMoneyText, {marginRight: 5}]}>$</Text>
                    <TextInput
                        value={wholeValue} 
                        ref={amountWholeRef}
                        placeholder={'0'}
                        onChangeText={onAmountWholeChangeHandle}
                        style={[mobilePaymentTemplateStyle.bigMoneyText, {flexGrow: 0}]}
                        keyboardType={Platform.select({android: 'numeric', ios: 'number-pad'})}
                        testID='wholeNumber'
                    />
                    <Text style={mobilePaymentTemplateStyle.bigMoneyText}>.</Text>
                    <TextInput
                        value={decimalValue}
                        maxLength={2}
                        placeholder={'00'}
                        onChangeText={onAmountDecimalChangeHandle}
                        ref={amountDecimalRef}
                        style={mobilePaymentTemplateStyle.smallMoneyText}
                        keyboardType={Platform.select({android: 'numeric', ios: 'number-pad'})}
                        testID='decimalNumber'
                    />
                </UniversalContainer>
                <Text style={mobilePaymentTemplateStyle.balanceText}>No fees</Text>
            </View>
            <Button onClick={onSubmit}>Confirm</Button>
        </View>
    )
}
