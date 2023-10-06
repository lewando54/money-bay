import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import MoneyText from './MoneyText'
describe('MoneyText', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<MoneyText />)
    expect(tree).toMatchSnapshot()
  })
})
