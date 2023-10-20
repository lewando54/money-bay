import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render } from '@testing-library/react-native'
import CheckBoxSquare from './CheckBoxSquare'
describe('CheckBoxSquare', () => {
    jest.useFakeTimers()
    it('should render correctly', () => {
        const tree = renderer.create(<CheckBoxSquare />)
        expect(tree).toMatchSnapshot()
    })

    it('should be checked when pressed', () => {
        const setChecked = jest.fn()
        const { getByTestId } = render(<CheckBoxSquare checked={false} onPress={(newValue) => setChecked(newValue)} testID='test'/>)
        fireEvent.press(getByTestId('test'))
        expect(setChecked).toHaveBeenCalledWith(true)
    })

    it('should be unchecked when pressed while checked', () => {
        const setChecked = jest.fn()
        const { getByTestId } = render(<CheckBoxSquare checked={true} onPress={(newValue) => setChecked(newValue)} testID='test'/>)
        fireEvent.press(getByTestId('test'))
        expect(setChecked).toHaveBeenCalledWith(false)
    })
})
