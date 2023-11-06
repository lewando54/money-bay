import React from 'react'
import renderer from 'react-test-renderer'

import SearchInput from './SearchInput'
describe('SearchInput', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<SearchInput />)
        expect(tree).toMatchSnapshot()
    })
})
