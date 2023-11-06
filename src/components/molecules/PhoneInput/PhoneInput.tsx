import React from 'react'
import { Image, Platform,Text, TextInput, View } from 'react-native'

import UniversalContainer from '../../atoms/UniversalContainer/UniversalContainer'

import phoneInputStyle from './PhoneInput.style'

interface IPhoneInputProps {
    value?: string
    onChange?: (newValue: string) => void
    testID?: string
}

export default function PhoneInput({
    value,
    onChange,
    testID
}: IPhoneInputProps){
    const onChangeHandle = (newValue: string) => {
        if(onChange){
            onChange(newValue)
        }
    }

    return (
        <UniversalContainer style={[phoneInputStyle.mainContainer, phoneInputStyle.containerOrientation]} castShadow={true}>
            <View style={phoneInputStyle.containerOrientation}>
                <Image style={phoneInputStyle.flag} source={require('./assets/flag.png')} />
                <Text style={phoneInputStyle.text}>+17</Text>
            </View>
            <Text style={phoneInputStyle.text}>|</Text>
            <TextInput 
                testID={testID}
                value={value} 
                onChangeText={onChangeHandle} 
                style={[phoneInputStyle.textField, phoneInputStyle.text]} 
                placeholder='xxxxxxxxx'
                maxLength={9} 
                keyboardType={Platform.select({android: 'numeric', ios: 'number-pad'})} 
            />
        </UniversalContainer>
    )
}
