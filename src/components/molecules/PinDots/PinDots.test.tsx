import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import PinDots from './PinDots'
import { useSharedValue } from 'react-native-reanimated'
describe('PinDots', () => {
    jest.useFakeTimers()
    it('should render correctly', () => {
        const tree = renderer.create(<PinDots />)
        expect(tree).toMatchSnapshot()
    })
})
