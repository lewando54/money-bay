import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render, screen } from '@testing-library/react-native'
import Checkbox from './Checkbox'

describe('Checkbox', () => {
  jest.useFakeTimers();
  it('should render correctly', () => {
    const tree = renderer.create(<Checkbox checked={false} onPress={jest.fn()}/>)
    expect(tree).toMatchSnapshot()
  })

  it('should be checked when pressed', () => {
    const setChecked = jest.fn()
    const { getByTestId } = render(<Checkbox checked={false} onPress={(newValue) => setChecked(newValue)} testID='test'/>)
    fireEvent.press(getByTestId('test'))
    expect(setChecked).toHaveBeenCalledWith(true)
  })

  it('should be unchecked when pressed while checked', () => {
    const setChecked = jest.fn()
    const { getByTestId } = render(<Checkbox checked={true} onPress={(newValue) => setChecked(newValue)} testID='test'/>)
    fireEvent.press(getByTestId('test'))
    expect(setChecked).toHaveBeenCalledWith(false)
  })

  it('should call onPress when pressed', () => {
    const handleOnPress = jest.fn()
    const { getByTestId } = render(<Checkbox checked={false} onPress={handleOnPress} testID='test'/>)
    fireEvent.press(getByTestId('test'))
    expect(handleOnPress).toHaveBeenCalled()
  })
})
