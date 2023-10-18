import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import TransactionHistory from './TransactionHistoryTemplate'
describe('TransactionHistory', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<TransactionHistory />)
    expect(tree).toMatchSnapshot()
  })
})
