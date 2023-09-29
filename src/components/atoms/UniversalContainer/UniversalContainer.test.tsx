import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import UniversalContainer from './UniversalContainer'
import { Text } from 'react-native'

describe('UniversalContainer', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<UniversalContainer />)
    expect(tree).toMatchSnapshot()
  })

  it('should render children', () => {
    const tree = renderer.create(<UniversalContainer><Text>Test</Text></UniversalContainer>)
    expect(tree).toMatchSnapshot()
  })

  it('should render with custom background color', () => {
    const tree = renderer.create(<UniversalContainer backgroundColor='#ff0' />)
    expect(tree).toMatchSnapshot()
  })

  it('should render with shadow', () => {
    const tree = renderer.create(<UniversalContainer castShadow={true} />)
    expect(tree).toMatchSnapshot()
  })
})