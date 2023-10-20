import React from 'react'
import renderer from 'react-test-renderer'
import TransactionDetailsTemplate from './TransactionDetailsTemplate'
describe('TransactionDetailsTemplate', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<TransactionDetailsTemplate />)
        expect(tree).toMatchSnapshot()
    })
})
