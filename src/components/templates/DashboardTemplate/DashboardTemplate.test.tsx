import React from 'react'
import renderer from 'react-test-renderer'
import DashboardTemplate from './DashboardTemplate'
describe('DashboardTemplate', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<DashboardTemplate />)
        expect(tree).toMatchSnapshot()
    })
})
