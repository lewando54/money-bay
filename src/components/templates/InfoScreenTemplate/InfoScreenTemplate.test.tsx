import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import InfoScreenTemplate from './InfoScreenTemplate'
import Images from 'assets/images'
import { Text } from 'react-native'
import globalThemeStyle, { BODY_TEXT_COLOR, MAIN_DARK } from '../../../styling/GlobalTheme.style'
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
