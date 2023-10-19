﻿import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import Pagination from './Pagination'
describe('Pagination', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Pagination />)
    expect(tree).toMatchSnapshot()
  })
})