import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render, screen } from '@testing-library/react-native'
import PhoneInput from './PhoneInput'
describe('PhoneInput', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<PhoneInput />)
        expect(tree).toMatchSnapshot()
    })

    it('should pass typed text to passed onChange', () => {
        const onChange = jest.fn()

        const { getByTestId } = render(
            <PhoneInput
                value={'1234'}
                testID='textinput-test'
                onChange={onChange}
            />
        )
        const input = getByTestId('textinput-test')
        fireEvent.changeText(input, '12345')
        expect(onChange).toBeCalledWith('12345')
    })

    it('should not call onChange when not passed', () => {
        const { getByTestId } = render(
            <PhoneInput
                value={'1234'}
                testID='textinput-test'
                onChange={undefined}
            />
        )
        const input = getByTestId('textinput-test')
        fireEvent.changeText(input, '12345')
    })
})
