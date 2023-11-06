import React from 'react'
import renderer from 'react-test-renderer'

import MiniCreditCard from './MiniCreditCard'
describe('MiniCreditCard', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<MiniCreditCard />)
        expect(tree).toMatchSnapshot()
    })

    it('should render correct card issuer logo when chosen', () => {
        const tree = renderer.create(<MiniCreditCard cardIssuer='mastercard'/>)
        expect(tree).toMatchSnapshot()
    })

    it('should render with custom gradient colors when provided', () => {
        const tree = renderer.create(<MiniCreditCard gradientColors={['#f00', '#ff0']}/>)
        expect(tree).toMatchSnapshot()
    })
})