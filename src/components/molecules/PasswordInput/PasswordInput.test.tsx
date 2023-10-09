import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import PasswordInput from './PasswordInput'
describe('PasswordInput', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<PasswordInput />)
    expect(tree).toMatchSnapshot()
  })
})
