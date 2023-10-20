import React from 'react'
import renderer from 'react-test-renderer'
import LoanBox from './LoanBox'
describe('LoanBox', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<LoanBox />)
        expect(tree).toMatchSnapshot()
    })

    it('should render one month correctly', () => {
        const tree = renderer.create(<LoanBox period={1}/>)
        expect(tree).toMatchSnapshot()
    })
})
