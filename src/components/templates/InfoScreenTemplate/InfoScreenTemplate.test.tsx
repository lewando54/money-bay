import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'
import Images from '@assets/images'

import globalThemeStyle, { BODY_TEXT_COLOR, MAIN_DARK } from '../../../styling/GlobalTheme.style'
import InfoScreenTemplate from './InfoScreenTemplate'
describe('InfoScreenTemplate', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<InfoScreenTemplate />)
        expect(tree).toMatchSnapshot()
    })

    it('should render correctly', () => {
        const tree = renderer.create(<InfoScreenTemplate 
            icon={<Images.accountSuccessSVG/>}
            title='Account created!'
            titleColor={MAIN_DARK}
            body={<Text style={{...globalThemeStyle.text_Regular, color: BODY_TEXT_COLOR, fontSize: 16, textAlign: 'center', marginTop: 20}}>Your account has been created successfully.</Text>}
            onSubmit={() => console.log('test')} />)
        expect(tree).toMatchSnapshot()
    })

    it('should render with buttons correctly', () => {
        const tree = renderer.create(<InfoScreenTemplate 
            icon={<Images.accountSuccessSVG/>}
            title='Account created!'
            titleColor={MAIN_DARK}
            body={<Text style={{...globalThemeStyle.text_Regular, color: BODY_TEXT_COLOR, fontSize: 16, textAlign: 'center', marginTop: 20}}>Your account has been created successfully.</Text>}
            additionalButtons={[{
                children: 'Test',
            }]}
            onSubmit={() => console.log('test')} />)
        expect(tree).toMatchSnapshot()
    })
})
