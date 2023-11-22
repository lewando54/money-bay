import React from 'react'
import renderer from 'react-test-renderer'

import CustomText from './CustomText'

import { globalColors } from '@styling/GlobalTheme.style'

describe('CustomText', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<CustomText style={{color: globalColors.BODY_TEXT_COLOR}}>Testing</CustomText>)
        expect(tree).toMatchSnapshot()
    })
})
