import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import RadioButton from './RadioButton'
describe('RadioButton', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<RadioButton />)
    expect(tree).toMatchSnapshot()
  })
})
