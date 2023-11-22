import React from 'react'
import renderer from 'react-test-renderer'

import Images from '@assets/images'
import { CustomText } from '@atoms'

import InfoScreenTemplate from './InfoScreenTemplate'

import globalThemeStyle, { globalColors } from '@styling/GlobalTheme.style'
describe('InfoScreenTemplate', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<InfoScreenTemplate />)
        expect(tree).toMatchSnapshot()
    })

    it('should render correctly', () => {
        const tree = renderer.create(<InfoScreenTemplate 
            icon={<Images.accountSuccessSVG/>}
            title='Account created!'
            titleColor={globalColors.MAIN_DARK}
            body={<CustomText style={{...globalThemeStyle.text_Regular, color: globalColors.BODY_TEXT_COLOR, fontSize: 16, textAlign: 'center', marginTop: 20}}>Your account has been created successfully.</CustomText>}
            onSubmit={() => console.log('test')} />)
        expect(tree).toMatchSnapshot()
    })

    it('should render with buttons correctly', () => {
        const tree = renderer.create(<InfoScreenTemplate 
            icon={<Images.accountSuccessSVG/>}
            title='Account created!'
            titleColor={globalColors.MAIN_DARK}
            body={<CustomText style={{...globalThemeStyle.text_Regular, color: globalColors.BODY_TEXT_COLOR, fontSize: 16, textAlign: 'center', marginTop: 20}}>Your account has been created successfully.</CustomText>}
            additionalButtons={[{
                children: 'Test',
            }]}
            onSubmit={() => console.log('test')} />)
        expect(tree).toMatchSnapshot()
    })
})
