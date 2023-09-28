import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import CircleWithIcon from './CircleWithIcon'
describe('CircleWithIcon', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<CircleWithIcon />)
    expect(tree).toMatchSnapshot()
  })
})
