import React from 'react'
import renderer from 'react-test-renderer'

import TransactionHistory from './TransactionHistoryTemplate'
describe('TransactionHistory', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<TransactionHistory />)
        expect(tree).toMatchSnapshot()
    })
})
