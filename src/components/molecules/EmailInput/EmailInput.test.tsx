import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import EmailInput from './EmailInput'
describe('EmailInput', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<EmailInput />)
    expect(tree).toMatchSnapshot()
  })
})
