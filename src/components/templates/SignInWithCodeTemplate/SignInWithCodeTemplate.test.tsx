import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import SignInWithCodeTemplate from './SignInWithCodeTemplate'
describe('SignInWithCodeTemplate', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<SignInWithCodeTemplate />)
    expect(tree).toMatchSnapshot()
  })
})
