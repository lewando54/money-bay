import React from 'react'
import renderer from 'react-test-renderer'

import MoneyText from './MoneyText'
describe('MoneyText', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<MoneyText />)
        expect(tree).toMatchSnapshot()
    })
})
