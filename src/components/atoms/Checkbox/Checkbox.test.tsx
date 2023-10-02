import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import Checkbox from './Checkbox'
describe('Checkbox', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Checkbox />)
    expect(tree).toMatchSnapshot()
  })
})
