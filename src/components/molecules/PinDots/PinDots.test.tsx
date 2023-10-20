import React from 'react'
import renderer from 'react-test-renderer'
import PinDots from './PinDots'
describe('PinDots', () => {
    jest.useFakeTimers()
    it('should render correctly', () => {
        const tree = renderer.create(<PinDots />)
        expect(tree).toMatchSnapshot()
    })
})
