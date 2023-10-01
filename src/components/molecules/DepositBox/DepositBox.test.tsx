import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react-native'
import DepositBox from './DepositBox'
describe('DepositBox', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<DepositBox />)
    expect(tree).toMatchSnapshot()
  })

  it('should render first date without year when the year is the same', () => {
    const tree = renderer.create(<DepositBox dateFrom={new Date('2022-09-01')} dateTo={new Date('2022-10-01')}/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render first date with year when the year is not the same', () => {
    const tree = renderer.create(<DepositBox dateFrom={new Date('2022-09-01')} dateTo={new Date('2023-10-01')}/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render green checkmark icon and orange button when finished', () => {
    const tree = renderer.create(<DepositBox isFinished={true}/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render deposit icon and top-up button when not finished', () => {
    const tree = renderer.create(<DepositBox isFinished={false}/>)
    expect(tree).toMatchSnapshot()
  })
})
