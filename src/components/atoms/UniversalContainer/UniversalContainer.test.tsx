import React from 'react'
import renderer from 'react-test-renderer'

import { CustomText } from '@atoms'

import UniversalContainer from './UniversalContainer'

describe('UniversalContainer', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<UniversalContainer />)
        expect(tree).toMatchSnapshot()
    })

    it('should render children', () => {
        const tree = renderer.create(<UniversalContainer><CustomText>Test</CustomText></UniversalContainer>)
        expect(tree).toMatchSnapshot()
    })

    it('should render with custom background color', () => {
        const tree = renderer.create(<UniversalContainer backgroundColor='#ff0' />)
        expect(tree).toMatchSnapshot()
    })

    it('should render with shadow', () => {
        const tree = renderer.create(<UniversalContainer castShadow={true} />)
        expect(tree).toMatchSnapshot()
    })
})