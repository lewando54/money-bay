import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import Notification from './Notification'
describe('Notification', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Notification />)
    expect(tree).toMatchSnapshot()
  })
})
