import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import CardIssuerRadioButton from './CardIssuerRadioButton'
describe('CardIssuerRadioButton', () => {
  jest.useFakeTimers();
  it('should render correctly', () => {
    const tree = renderer.create(<CardIssuerRadioButton chosen={false} onPress={jest.fn()}/>)
    expect(tree).toMatchSnapshot()
  })
})
