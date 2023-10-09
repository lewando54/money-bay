import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import PhoneInput from './PhoneInput'
describe('PhoneInput', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<PhoneInput />)
    expect(tree).toMatchSnapshot()
  })
})
