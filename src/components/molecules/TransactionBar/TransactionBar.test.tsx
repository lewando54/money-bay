import React from 'react'
import renderer from 'react-test-renderer'
import TransactionBar from './TransactionBar'
describe('TransactionBar', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<TransactionBar />)
        expect(tree).toMatchSnapshot()
    })

    it('should hide percent by default', () => {
        const tree = renderer.create(<TransactionBar />)
        expect(tree).toMatchSnapshot()
    })

    it('should be expense by default', () => {
        const tree = renderer.create(<TransactionBar />)
        expect(tree).toMatchSnapshot()
    })

    it('should show percent when passed', () => {
        const tree = renderer.create(<TransactionBar percent={30}/>)
        expect(tree).toMatchSnapshot()
    })

    it('should have green color of balance and + sign when isExpense is false', () => {
        const tree = renderer.create(<TransactionBar isExpense={false}/>)
        expect(tree).toMatchSnapshot()
    })

    it('should render correct text in title and subtitle', () => {
        const tree = renderer.create(<TransactionBar />)
        expect(tree).toMatchSnapshot()
    })
})
