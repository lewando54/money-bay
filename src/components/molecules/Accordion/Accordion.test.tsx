import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import Accordion from './Accordion'
describe('Accordion', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Accordion />)
    expect(tree).toMatchSnapshot()
  })
})
