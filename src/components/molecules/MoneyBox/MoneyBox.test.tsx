﻿import React from 'react'
import renderer from 'react-test-renderer'

import MoneyBox from './MoneyBox'
describe('MoneyBox', () => {
    jest.useFakeTimers()
    it('should render correctly', () => {
        const tree = renderer.create(<MoneyBox />)
        expect(tree).toMatchSnapshot()
    })
})
