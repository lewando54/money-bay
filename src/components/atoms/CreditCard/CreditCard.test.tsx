import React from 'react'
import renderer from 'react-test-renderer'
import CreditCard from './CreditCard'
describe('CreditCard', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<CreditCard />)
        expect(tree).toMatchSnapshot()
    })

    it('should render mastercard logo when chosen', () => {
        const tree = renderer.create(<CreditCard cardIssuer='mastercard'/>)
        expect(tree).toMatchSnapshot()
    })

    it('should render currency symbol on the right when chosen', () => {
        const tree = renderer.create(<CreditCard cardCurrency={{iso: 'pln', symbol: 'zł', left: false}}/>)
        expect(tree).toMatchSnapshot()
    })
})
