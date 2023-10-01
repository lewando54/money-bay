﻿import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render, screen } from '@testing-library/react-native'
import OptionButton from './OptionButton'
describe('OptionButton', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<OptionButton />)
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly when chosen option is enabled', () => {
    const tree = renderer.create(<OptionButton isChosen={true}/>)
    expect(tree).toMatchSnapshot()
  })

  it('should call onClick when pressed', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<OptionButton isChosen={true} onClick={onClick} testID='test'/>)
    fireEvent.press(getByTestId('test'))
    expect(onClick).toBeCalled()
  })
})