import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import TransactionList from './TransactionList'
describe('TransactionList', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<TransactionList />)
    expect(tree).toMatchSnapshot()
  })
})
