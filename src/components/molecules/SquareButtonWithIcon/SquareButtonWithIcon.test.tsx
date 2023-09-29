import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render, screen } from '@testing-library/react-native'
import SquareButtonWithIcon from './SquareButtonWithIcon'
describe('SquareButtonWithIcon', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<SquareButtonWithIcon />)
    expect(tree).toMatchSnapshot()
  })

  it('should call onClick when pressed', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<SquareButtonWithIcon onClick={onClick} testID='test'/>)
    fireEvent.press(getByTestId('test'))
    expect(onClick).toBeCalled()
  })
})
