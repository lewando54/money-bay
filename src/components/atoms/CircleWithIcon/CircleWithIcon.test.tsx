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

  it('should be gradient and call onClick when passed array of colors', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<CircleWithIcon testID='test' onClick={onClick} backgroundColor={['#f00', '#ff0']}/>)
    fireEvent.press(getByTestId('test'))
    expect(onClick).toHaveBeenCalled()
  })

  it('should be gradient when passed array of colors', () => {
    const tree = renderer.create(<CircleWithIcon backgroundColor={['#f00', '#ff0']}/>)
    expect(tree).toMatchSnapshot()
  })

  it('should be gradient when passed array of colors and positioned with start/end', () => {
    const tree = renderer.create(<CircleWithIcon backgroundColor={['#f00', '#ff0']} start={{x: 0, y: 0}} end={{x: 1, y: 1}}/>)
    expect(tree).toMatchSnapshot()
  })
})