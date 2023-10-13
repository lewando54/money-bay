import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import OnboardingTemplate from './OnboardingTemplate'
describe('OnboardingTemplate', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<OnboardingTemplate />)
    expect(tree).toMatchSnapshot()
  })
})
