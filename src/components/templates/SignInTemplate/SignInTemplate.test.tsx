﻿import React from 'react'
import renderer from 'react-test-renderer'

import { TSocialsArray } from '../../organisms/SocialButtonList/SocialButtonList'

import SignInTemplate from './SignInTemplate'
describe('SignInTemplate', () => {
    const socials: TSocialsArray = [
        { id: 0, color: '#3B5999', icon: 'facebook', href: 'https://google.pl/' },
        { id: 1, color: '#55ACEE', icon: 'twitter', href: 'https://google.pl/' },
        { id: 2, color: '#DD4B39', icon: 'google', href: 'https://google.pl/' }
    ]

    it('should render correctly', () => {
        const tree = renderer.create(<SignInTemplate socials={socials}/>)
        expect(tree).toMatchSnapshot()
    })
})
