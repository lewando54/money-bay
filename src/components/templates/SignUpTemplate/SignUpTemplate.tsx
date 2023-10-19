﻿import React from 'react'
import signUpTemplateStyle from './SignUpTemplate.style'
import { View, Text } from 'react-native'
import EmailInput from '../../molecules/EmailInput/EmailInput'
import PasswordInput from '../../molecules/PasswordInput/PasswordInput'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import Link from '../../atoms/Link/Link'
import SocialButtonList, { TSocialsArray } from '../../organisms/SocialButtonList/SocialButtonList'

interface ISignUpTemplateProps {
    emailValue?: string
    passwordValue?: string
    passwordConfirmValue?: string
    nameValue?: string
    onNameChange?: (newValue: string) => void
    onEmailChange?: (newValue: string) => void
    onPasswordChange?: (newValue: string) => void
    onPasswordConfirmChange?: (newValue: string) => void
    onSubmit?: () => void
    onSignInPress?: () => void
    socials: TSocialsArray
    testID?: string
}

export default function SignUpTemplate({
    emailValue,
    passwordValue,
    passwordConfirmValue,
    nameValue,
    onNameChange,
    onEmailChange,
    onPasswordChange,
    onPasswordConfirmChange,
    onSubmit,
    onSignInPress,
    socials,
    testID
}: ISignUpTemplateProps){
    return (
        <View style={signUpTemplateStyle.mainContainer} testID={testID}>
            <Text style={signUpTemplateStyle.heading}>Sign up!</Text>
            <Input value={nameValue} onChange={onNameChange} placeholder='Enter your name'/>
            <EmailInput value={emailValue} onChange={onEmailChange} placeholder='Enter your email'/>
            <PasswordInput value={passwordValue} onChange={onPasswordChange} placeholder='Enter your password'/>
            <PasswordInput value={passwordConfirmValue} onChange={onPasswordConfirmChange} placeholder='Confirm your password'/>
            <Button onClick={onSubmit}>Sign up</Button>
            <View style={signUpTemplateStyle.registerTextContainer}>
                <Text style={signUpTemplateStyle.rememberText}>Already have an account?</Text>
                <Link onPress={onSignInPress}>Sign in.</Link>
            </View>
            <SocialButtonList socials={socials}/>
        </View>
    )
}