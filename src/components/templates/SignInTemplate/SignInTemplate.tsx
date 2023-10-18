﻿import React from 'react'
import signInTemplateStyle from './SignInTemplate.style'
import EmailInput from '../../molecules/EmailInput/EmailInput'
import PasswordInput from '../../molecules/PasswordInput/PasswordInput'
import CheckBoxSquare from '../../atoms/CheckBoxSquare/CheckBoxSquare'
import Link from '../../atoms/Link/Link'
import Button from '../../atoms/Button/Button'
import { View, Text } from 'react-native'
import SocialButtonList, { TSocialsArray } from '../../organisms/SocialButtonList/SocialButtonList'
import GlobalThemeStyle, { MAIN_DARK } from '../../../styling/GlobalTheme.style'
import { color } from 'react-native-reanimated'

interface ISignInTemplateProps {
    emailValue?: string
    passwordValue?: string
    rememberMeChecked?: boolean
    onEmailChange?: (newValue: string) => void
    onPasswordChange?: (newValue: string) => void
    onRememberMeChange?: (newValue: boolean) => void
    onLostYourPasswordPress?: () => void
    onRegisterNowPress?: () => void
    socials?: TSocialsArray
    onSubmit?: () => void
    testID?: string
}

export default function SignInTemplate({
    emailValue,
    passwordValue,
    rememberMeChecked,
    onEmailChange,
    onPasswordChange,
    onRememberMeChange,
    onLostYourPasswordPress,
    onRegisterNowPress,
    socials,
    onSubmit,
    testID
}: ISignInTemplateProps){
    return (
        <View style={signInTemplateStyle.mainContainer} testID={testID}>
            <Text style={signInTemplateStyle.heading}>Welcome to MoneyBay!</Text>
            <EmailInput value={emailValue} onChange={onEmailChange}/>
            <PasswordInput value={passwordValue} onChange={onPasswordChange}/>
            <View style={signInTemplateStyle.rememberAndPasswordContainer}>
                <View style={signInTemplateStyle.rememberContainer}>
                    <CheckBoxSquare checked={rememberMeChecked} onPress={onRememberMeChange}/>
                    <Text style={signInTemplateStyle.rememberText}>Remember me</Text>
                </View>
                <Link style={{marginLeft: 'auto'}} onPress={onLostYourPasswordPress}>Lost your password?</Link>
            </View>
            <Button onClick={onSubmit}>Sign in</Button>
            <View style={signInTemplateStyle.registerTextContainer}>
                <Text style={signInTemplateStyle.rememberText}>No account?</Text>
                <Link onPress={onRegisterNowPress}>Register now</Link>
            </View>
            <SocialButtonList socials={socials}/>
        </View>
    )
}
