import React from 'react'
import { View } from 'react-native'

import { CustomText } from '@atoms'
import { Button } from '@atoms'
import { PasswordInput } from '@molecules'

import newPasswordTemplateStyle from './NewPasswordTemplate.style'

interface INewPasswordTemplateProps {
    newPasswordValue?: string
    confirmPasswordValue?: string
    onNewPasswordChange?: (newValue: string) => void
    onConfirmPasswordChange?: (newValue: string) => void
    onSubmit?: () => void
    testID?: string
}

export default function NewPasswordTemplate({
    newPasswordValue,
    confirmPasswordValue,
    onNewPasswordChange,
    onConfirmPasswordChange,
    onSubmit,
    testID
}: INewPasswordTemplateProps){
    return (
        <View testID={testID} style={newPasswordTemplateStyle.mainContainer}>
            <CustomText style={newPasswordTemplateStyle.text}>Enter new password and confirm.</CustomText>
            <View style={newPasswordTemplateStyle.inputContainer}>
                <PasswordInput value={newPasswordValue} onChange={onNewPasswordChange} placeholder='Enter new password'/>
                <PasswordInput value={confirmPasswordValue} onChange={onConfirmPasswordChange} placeholder='Confirm your password'/>
            </View>
            <Button onClick={onSubmit}>Change password</Button>
        </View>
    )
}
