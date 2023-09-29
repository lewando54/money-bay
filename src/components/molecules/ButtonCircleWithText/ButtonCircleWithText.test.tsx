import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'
import ButtonCircleWithText from './ButtonCircleWithText'
describe('ButtonCircleWithText', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<ButtonCircleWithText />)
    expect(tree).toMatchSnapshot()
  })

  it('should call onClick when pressed', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<ButtonCircleWithText onClick={onClick} testID='test'/>)
    fireEvent.press(getByTestId('test'))
    expect(onClick).toBeCalled()
  })
})
