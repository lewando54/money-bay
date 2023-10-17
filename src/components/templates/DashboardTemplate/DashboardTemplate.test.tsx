import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import DashboardTemplate from './DashboardTemplate'
describe('DashboardTemplate', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<DashboardTemplate />)
    expect(tree).toMatchSnapshot()
  })
})
