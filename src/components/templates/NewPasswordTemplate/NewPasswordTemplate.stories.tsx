/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useState } from 'react'
import { Meta,StoryObj } from '@storybook/react-native'

import NewPasswordTemplate from './NewPasswordTemplate'

interface IStatefulPasswordMockupProps {
    onSubmit: () => void
}

function StatefulPassword({
    onSubmit
}: IStatefulPasswordMockupProps) {
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <NewPasswordTemplate
            newPasswordValue={newPassword}
            onNewPasswordChange={(newValue) => setNewPassword(() => newValue)}
            confirmPasswordValue={confirmPassword}
            onConfirmPasswordChange={(newValue) => setConfirmPassword(() => newValue)}
            onSubmit={onSubmit}
        />
    )
}

const meta = {
    component: StatefulPassword,
    argTypes: {
        onSubmit: { action: 'Submitted' }
    }
} satisfies Meta<typeof StatefulPassword>

export default meta
type Story = StoryObj<typeof StatefulPassword>

export const Default: Story = {
    args: {
        // To write
    }
}
