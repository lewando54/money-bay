import React from 'react'
import renderer from 'react-test-renderer'

import Notification from './Notification'
describe('Notification', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<Notification />)
        expect(tree).toMatchSnapshot()
    })

    it('should render green icon with checkmark by default', () => {
        const tree = renderer.create(<Notification type={'correct'}/>)
        expect(tree).toMatchSnapshot()
    })

    it('should render green icon with checkmark', () => {
        const tree = renderer.create(<Notification type='correct'/>)
        expect(tree).toMatchSnapshot()
    })

    it('should render yellow/orange icon with warning sign', () => {
        const tree = renderer.create(<Notification type='warning'/>)
        expect(tree).toMatchSnapshot()
    })

    it('should render red icon with x', () => {
        const tree = renderer.create(<Notification type='error'/>)
        expect(tree).toMatchSnapshot()
    })
})
