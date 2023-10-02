import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import Separator from './Separator'
describe('Separator', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Separator />)
    expect(tree).toMatchSnapshot()
  })
})
