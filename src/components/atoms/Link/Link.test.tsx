import React from 'react'
import renderer from 'react-test-renderer'

import Link from './Link'
describe('Link', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<Link />)
        expect(tree).toMatchSnapshot()
    })
})
