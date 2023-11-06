/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { useState } from 'react'
import { Meta,StoryObj } from '@storybook/react-native'
import { TSocialsArray } from 'src/components/organisms/SocialButtonList/SocialButtonList'

import SignUpTemplate from './SignUpTemplate'

interface IStatefulSignUpMockupProps {
    emailValue?: string
    passwordValue?: string
    passwordConfirmValue?: string
    nameValue?: string
    onSubmit?: () => void
    onSignInPress?: () => void
    socials?: TSocialsArray
}

function StatefulSignUp({
    emailValue,
    passwordValue,
    passwordConfirmValue,
    nameValue,
    onSubmit,
    onSignInPress,
    socials,
}: IStatefulSignUpMockupProps){
    const [name, setName] = useState(nameValue)
    const [email, setEmail] = useState(emailValue)
    const [password, setPassword] = useState(passwordValue)
    const [confirmPassword, setConfirmPassword] = useState(passwordConfirmValue)

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
            onSignInPress={onSignInPress}
            onSubmit={onSubmit}
            socials={socials}
        />
    )
}

const meta = {
    component: StatefulSignUp,
    argTypes: {
        emailValue: {control: 'text'},
        passwordValue: {control: 'text'},
        passwordConfirmValue: {control: 'text'},
        nameValue: {control: 'text'},
        onSubmit: {action: 'Submitted'},
        onSignInPress: {action: 'SignIn Pressed'},
        socials: { control: 'object' }
    }
} satisfies Meta<typeof StatefulSignUp>

export default meta
type Story = StoryObj<typeof StatefulSignUp>

export const Default: Story = {
    args: {
        socials: [
            { id: 0, color: '#3B5999', icon: 'facebook', href: 'https://google.pl/' },
            { id: 1, color: '#55ACEE', icon: 'twitter', href: 'https://google.pl/' },
            { id: 2, color: '#DD4B39', icon: 'google', href: 'https://google.pl/' }
        ],
    }
}
