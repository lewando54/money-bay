import React, { useState } from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import PasswordInput from './PasswordInput'

interface IInputMockupProps {
    value?: string
    placeholder?: string
}

function StatefulInput({
    value='',
    placeholder='Type something',
}: IInputMockupProps){
    const [ textValue, setTextValue ] = useState(value)

    return (
        <PasswordInput 
            value={textValue}
            placeholder={placeholder}
            onChange={(newValue) => setTextValue(() => newValue)}
        />
    )
}

describe('PasswordInput', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<PasswordInput />)
        expect(tree).toMatchSnapshot()
    })

    it('should swap icons when pressed on them, and toggle password visibility', () => {
        const { getByTestId, queryByTestId } = render(<StatefulInput />)
        const textInput = getByTestId('passwordtest')
        fireEvent.changeText(textInput, 'testing')
        waitFor(() => {
            const icon = getByTestId('input-icon')
            expect(queryByTestId('eye-off')).toBeTruthy()
            fireEvent.press(icon)
            expect(queryByTestId('eye')).toBeTruthy()
            expect(textInput.props.secureTextEntry).toBe(false)
        })
    })
})
