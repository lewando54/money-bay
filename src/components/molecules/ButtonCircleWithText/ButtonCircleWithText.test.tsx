import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import ButtonCircleWithText from './ButtonCircleWithText'
describe('ButtonCircleWithText', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<ButtonCircleWithText />)
    expect(tree).toMatchSnapshot()
  })
})
