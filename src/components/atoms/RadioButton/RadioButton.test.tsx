import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render, screen } from '@testing-library/react-native'
import RadioButton from './RadioButton'
describe('RadioButton', () => {
    jest.useFakeTimers()
    it('should render correctly', () => {
        const tree = renderer.create(<RadioButton chosen={false} onPress={jest.fn()}/>)
        expect(tree).toMatchSnapshot()
    })

    it('should be chosen when passed true', () => {
        const tree = renderer.create(<RadioButton chosen={true} onPress={jest.fn()}/>)
        expect(tree).toMatchSnapshot()
    })

    it('should call onPress when pressed', () => {
        const onPress = jest.fn()
        const { getByTestId } = render(<RadioButton chosen={false} onPress={onPress} testID='test'/>)
        fireEvent.press(getByTestId('test'))
        expect(onPress).toBeCalled()
    })

    it('should call onPress with chosen=true when pressed and chosen', () => {
        const onPress = jest.fn()
        const { getByTestId } = render(<RadioButton chosen={true} onPress={onPress} testID='test'/>)
        fireEvent.press(getByTestId('test'))
        expect(onPress).toBeCalledWith(0, 'default', true)
    })
})
