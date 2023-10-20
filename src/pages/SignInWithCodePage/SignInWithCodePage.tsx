import React, { useState } from 'react'
import SignInWithCodeTemplate from '../../components/templates/SignInWithCodeTemplate/SignInWithCodeTemplate'
import Images from '@assets/images'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../App'

type Props = NativeStackScreenProps<RootStackParamList, 'Sign In (with code)'>

export default function SignInWithCodePage({navigation}: Props) {
    const [pin, setPin] = useState('')

    const name = 'Cristina Wolf'
    const subname = 'Labore sunt'

    const onSubmitHandle = (pin: string) => {
        console.log(pin)
        if(pin == '1234'){
            navigation.navigate('Main')
            return true
        }
        return false
    }

    const onChangeHandle = (newValue: string) => {
        setPin(() => newValue)
    }

    const onFaceidPressHandle = () => {
        console.log('faceid pressed')
    }

    const onClosePressHandle = () => {
        setPin(() => '')
    }

    const onLostPasswordPressHandle = () => {
        navigation.navigate('New password')
    }

    return (
        <SignInWithCodeTemplate 
            name={name}
            subname={subname}
            profilePicture={Images.profilePicture}
            pin={pin}
            onSubmit={(newValue) => onSubmitHandle(newValue)}
            onChange={(newValue) => onChangeHandle(newValue)}
            onFaceidPress={onFaceidPressHandle}
            onClosePress={onClosePressHandle}
            onLostPasswordPress={onLostPasswordPressHandle}
        />
    )
}