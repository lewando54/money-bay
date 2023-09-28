import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render, screen } from '@testing-library/react-native'
import CircleWithIcon from './CircleWithIcon'
describe('CircleWithIcon', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<CircleWithIcon />)
    expect(tree).toMatchSnapshot()
  })

  it('should call onClick function when clicked', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<CircleWithIcon testID='test' onClick={onClick}/>)
    fireEvent.press(getByTestId('test'))
    expect(onClick).toHaveBeenCalled()
  })
})