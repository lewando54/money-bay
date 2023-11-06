import React from 'react'
import renderer from 'react-test-renderer'

import Accordion from './Accordion'
describe('Accordion', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<Accordion />)
        expect(tree).toMatchSnapshot()
    })
})
