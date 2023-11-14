import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { SignUpTemplate } from '@templates'
import { RootStackParamList } from 'App'
import { TSocialsArray } from 'src/components/organisms/SocialButtonList/SocialButtonList'

type Props = NativeStackScreenProps<RootStackParamList, 'Sign up'>

export default function SignUpPage({navigation}: Props) {
    const socials: TSocialsArray = [
        { id: 0, color: '#3B5999', icon: 'facebook', href: 'https://google.pl/' },
        { id: 1, color: '#55ACEE', icon: 'twitter', href: 'https://google.pl/' },
        { id: 2, color: '#DD4B39', icon: 'google', href: 'https://google.pl/' }
    ]

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onSubmitHandle = () => {
        console.log(name, ' ; ', email, ' ; ', password, ' ; ', confirmPassword)
        navigation.navigate('Account success')
    }

    const onSignInHandle = () => {
        navigation.navigate('Sign In')
    }

    return (
        <SignUpTemplate
            nameValue={name}
            onNameChange={(newValue) => setName(() => newValue)}
            emailValue={email}
            onEmailChange={(newValue) => setEmail(() => newValue)}
            passwordValue={password}
            onPasswordChange={(newValue) => setPassword(() => newValue)}
            passwordConfirmValue={confirmPassword}
            onPasswordConfirmChange={(newValue) => setConfirmPassword(() => newValue)}
            onSignInPress={onSignInHandle}
            onSubmit={onSubmitHandle}
            socials={socials}
        />
    )
}