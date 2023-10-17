import React, { useState } from 'react'
import SignInTemplate from '../../components/templates/SignInTemplate/SignInTemplate'
import { TSocialsArray } from '../../components/organisms/SocialButtonList/SocialButtonList'

export default function SignInPage({navigation}) {
    const socials: TSocialsArray = [
        { id: 0, color: '#3B5999', icon: 'facebook', href: 'https://google.pl/' },
        { id: 1, color: '#55ACEE', icon: 'twitter', href: 'https://google.pl/' },
        { id: 2, color: '#DD4B39', icon: 'google', href: 'https://google.pl/' }
    ]

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const handleSubmit = () => {
        console.log(email, ' ; ', password, ' ; ',rememberMe)
        navigation.navigate('Sign In (with code)')
    }

    const onLostYourPasswordPressHandle = () => {
        console.log('Redirect to Lost password')
    }

    const onRegisterNowPressHandle = () => {
        console.log('Redirect to register')
    }

    return (
        <SignInTemplate 
            socials={socials}
            emailValue={email}
            passwordValue={password}
            rememberMeChecked={rememberMe}
            onEmailChange={(newValue) => setEmail(() => newValue)}
            onPasswordChange={(newValue) => setPassword(() => newValue)}
            onRememberMeChange={(newValue) => setRememberMe(() => newValue)}
            onLostYourPasswordPress={onLostYourPasswordPressHandle}
            onRegisterNowPress={onRegisterNowPressHandle}
            onSubmit={handleSubmit}
        />
    )
}