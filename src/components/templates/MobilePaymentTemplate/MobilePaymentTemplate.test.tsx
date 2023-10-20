import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render } from '@testing-library/react-native'
import MobilePaymentTemplate from './MobilePaymentTemplate'

describe('MobilePaymentTemplate', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<MobilePaymentTemplate />)
        expect(tree).toMatchSnapshot()
    })

    it('should remove [".", ",", "-"] correctly', () => {
        const onChange = jest.fn()
        const { getByTestId } = render(<MobilePaymentTemplate onDecimalChange={onChange} onWholeChange={onChange}/>)
        fireEvent.changeText(getByTestId('wholeNumber'), 'test,')
        expect(onChange).toBeCalledWith('test')
        fireEvent.changeText(getByTestId('wholeNumber'), 'test.')
        expect(onChange).toBeCalledWith('test')
        fireEvent.changeText(getByTestId('wholeNumber'), 'test-')
        expect(onChange).toBeCalledWith('test')
        fireEvent.changeText(getByTestId('decimalNumber'), 'test,')
        expect(onChange).toBeCalledWith('test')
        fireEvent.changeText(getByTestId('decimalNumber'), 'test.')
        expect(onChange).toBeCalledWith('test')
        fireEvent.changeText(getByTestId('decimalNumber'), 'test-')
        expect(onChange).toBeCalledWith('test')
    })
})
