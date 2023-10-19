import React, { useState } from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render, screen } from '@testing-library/react-native'
import MobilePaymentTemplate from './MobilePaymentTemplate'

function Stateful(){
    const [wholeAmount, setWholeAmount] = useState('')
    const [decimalAmount, setDecimalAmount] = useState('')

    return (
        <MobilePaymentTemplate
            decimalValue={decimalAmount}
            onDecimalChange={(newValue) => setDecimalAmount(newValue)}
            wholeValue={wholeAmount}
            onWholeChange={(newValue) => setWholeAmount(newValue)}
        />
    )
}

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
