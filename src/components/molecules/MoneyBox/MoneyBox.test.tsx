import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import MoneyBox from './MoneyBox'
describe('MoneyBox', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<MoneyBox />)
    expect(tree).toMatchSnapshot()
  })

  it('should correctly react to negative values', () => {
    const { getByTestId } = render(<MoneyBox testID='test' currentAmount={-1000} goalAmount={-1}/>)
    expect(getByTestId('test').props).toEqual(1)
  })
})
