import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import Input from './Input'
describe('Input', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Input />)
    expect(tree).toMatchSnapshot()
  })
})
