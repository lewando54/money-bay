import React, { useState } from 'react'
import NewPasswordTemplate from '../../components/templates/NewPasswordTemplate/NewPasswordTemplate'

export default function NewPasswordPage() {
    const [newPasswordValue, setNewPasswordValue] = useState('')
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('')

    const onSubmitHandle = () => {
        console.log('New Password:')
        console.log(newPasswordValue, confirmPasswordValue)
    }

    return (
        <NewPasswordTemplate 
            newPasswordValue={newPasswordValue}
            onNewPasswordChange={(newValue) => setNewPasswordValue(() => newValue)}
            confirmPasswordValue={confirmPasswordValue}
            onConfirmPasswordChange={(newValue) => setConfirmPasswordValue(() => newValue)}
            onSubmit={onSubmitHandle}
        />
    )
}