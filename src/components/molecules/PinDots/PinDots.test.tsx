import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import PinDots from './PinDots'
describe('PinDots', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<PinDots />)
    expect(tree).toMatchSnapshot()
  })
})
