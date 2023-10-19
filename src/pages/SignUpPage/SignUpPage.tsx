import { View, Text } from 'react-native'
import React, { useState } from 'react'
import SignUpTemplate from '../../components/templates/SignUpTemplate/SignUpTemplate'
import { TSocialsArray } from '../../components/organisms/SocialButtonList/SocialButtonList'
import Images from 'assets/images'
import { MAIN_DARK } from '../../styling/GlobalTheme.style'

export default function SignUpPage({navigation}) {
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
        navigation.navigate('Info screen', {
            type: 'accountSuccess'
        })
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