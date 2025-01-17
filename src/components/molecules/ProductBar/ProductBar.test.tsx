﻿import React from 'react'
import renderer from 'react-test-renderer'

import ProductBar from './ProductBar'
describe('ProductBar', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<ProductBar />)
        expect(tree).toMatchSnapshot()
    })

    it('should render minicreditcard when passed card product', () => {
        const tree = renderer.create(<ProductBar product='card'/>)
        expect(tree).toMatchSnapshot()
    })

    it('should render account icon when passed account product', () => {
        const tree = renderer.create(<ProductBar product='account'/>)
        expect(tree).toMatchSnapshot()
    })

    it('should render without menu button', () => {
        const tree = renderer.create(<ProductBar hasMenuButton={false}/>)
        expect(tree).toMatchSnapshot()
    })

    it('should render with menu button', () => {
        const tree = renderer.create(<ProductBar hasMenuButton={true}/>)
        expect(tree).toMatchSnapshot()
    })

    it('should render custom balanceTextColor', () => {
        const tree = renderer.create(<ProductBar balanceTextColor='#fff'/>)
        expect(tree).toMatchSnapshot()
    })
})
