import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import SquareButtonWithIcon from './SquareButtonWithIcon'
describe('SquareButtonWithIcon', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<SquareButtonWithIcon />)
    expect(tree).toMatchSnapshot()
  })
})
