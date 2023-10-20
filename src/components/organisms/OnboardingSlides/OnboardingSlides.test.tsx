import React from 'react'
import renderer from 'react-test-renderer'
import OnboardingSlides from './OnboardingSlides'
describe('OnboardingSlides', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<OnboardingSlides />)
        expect(tree).toMatchSnapshot()
    })
})
