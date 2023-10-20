import React from 'react'
import renderer from 'react-test-renderer'
import OnboardingSlide from './OnboardingSlide'
describe('OnboardingSlide', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<OnboardingSlide />)
        expect(tree).toMatchSnapshot()
    })
})
