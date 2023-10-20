import React, { useState } from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render } from '@testing-library/react-native'
import EmailInput from './EmailInput'

interface IInputMockupProps {
  value?: string
  placeholder?: string
  onChange?: (newValue: string) => void
  testID?: string
}

function StatefulInput({
    value,
    placeholder='Type something',
    testID
}: IInputMockupProps){
    const [ textValue, setTextValue ] = useState(value)

    return (
        <EmailInput 
            value={textValue}
            placeholder={placeholder}
            testID={testID}
            onChange={(newValue) => setTextValue(() => newValue)}
        />
    )
}

describe('EmailInput', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<EmailInput />)
        expect(tree).toMatchSnapshot()
    })

    it('should render icon with checkmark when email is correct', () => {
        const { getByTestId, rerender } = render(<StatefulInput testID='inputtest'/>)
        fireEvent.changeText(getByTestId('inputtest'), 'lewando54@gmail.com')
        rerender(<StatefulInput testID='inputtest'/>)
        expect(getByTestId('input-icon')).toBeTruthy()
    })

    it('should not render icon with checkmark when email is not correctly typed', () => {
        const { getByTestId, rerender, queryByTestId } = render(<StatefulInput testID='inputtest'/>)
        fireEvent.changeText(getByTestId('inputtest'), 'lewando54@gmail.com')
        rerender(<StatefulInput testID='inputtest'/>)
        fireEvent.changeText(getByTestId('inputtest'), 'lewando54')
        rerender(<StatefulInput testID='inputtest'/>)
        expect(queryByTestId('input-icon')).toBeFalsy()
    })
})
