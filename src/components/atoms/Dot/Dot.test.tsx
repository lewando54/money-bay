import React from 'react'
import renderer from 'react-test-renderer'

import Dot from './Dot'
describe('Dot', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<Dot />)
        expect(tree).toMatchSnapshot()
    })
})
