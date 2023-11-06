import React from 'react'
import renderer from 'react-test-renderer'

import NewPasswordTemplate from './NewPasswordTemplate'
describe('NewPasswordTemplate', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<NewPasswordTemplate />)
        expect(tree).toMatchSnapshot()
    })
})
