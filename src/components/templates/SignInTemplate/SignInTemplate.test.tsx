import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import SignInTemplate from './SignInTemplate'
describe('SignInTemplate', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<SignInTemplate />)
    expect(tree).toMatchSnapshot()
  })
})
