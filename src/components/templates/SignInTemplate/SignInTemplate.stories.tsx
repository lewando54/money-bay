/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useState } from 'react'
import { Meta,StoryObj } from '@storybook/react-native'
import { TSocialsArray } from 'src/components/organisms/SocialButtonList/SocialButtonList'

import SignInTemplate from './SignInTemplate'

interface IStatefulSignInMockupProps {
    emailValue?: string
    passwordValue?: string
    rememberMeValue?: boolean
    socials?: TSocialsArray
    onLostYourPasswordPressHandle: () => void
    onRegisterNowPressHandle: () => void
    handleSubmit: () => void
}

function StatefulSignIn({
    emailValue,
    passwordValue,
    rememberMeValue,
    socials,
    onLostYourPasswordPressHandle,
    onRegisterNowPressHandle,
    handleSubmit

}: IStatefulSignInMockupProps){
    const [email, setEmail] = useState(emailValue)
    const [password, setPassword] = useState(passwordValue)
    const [rememberMe, setRememberMe] = useState(rememberMeValue)

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

const meta = {
    component: StatefulSignIn,
    argTypes: {
        socials: { control: 'object' },
        emailValue: { control: 'text' },
        passwordValue: { control: 'text' },
        rememberMeValue: { control: 'boolean' },
        onLostYourPasswordPressHandle: {action: 'LostYourPassword Pressed'},
        onRegisterNowPressHandle: {action: 'RegisterNow Pressed'},
        handleSubmit: {action: 'Submitted'},
    }
} satisfies Meta<typeof StatefulSignIn>

export default meta
type Story = StoryObj<typeof StatefulSignIn>

export const Default: Story = {
    args: {
        socials: [
            { id: 0, color: '#3B5999', icon: 'facebook', href: 'https://google.pl/' },
            { id: 1, color: '#55ACEE', icon: 'twitter', href: 'https://google.pl/' },
            { id: 2, color: '#DD4B39', icon: 'google', href: 'https://google.pl/' }
        ],
        emailValue: 'test@test.com',
        passwordValue: 'test',
        rememberMeValue: false
    }
}
