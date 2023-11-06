import React, { useState } from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render } from '@testing-library/react-native'

import SignInWithCodeTemplate from './SignInWithCodeTemplate'

interface IMockupProps {
    onSubmit?: (pin: string) => boolean
}

function Stateful({onSubmit}: IMockupProps) {
    const [pin, setPin] = useState('')
    const onChangeHandle = (newValue: string) => {
        setPin(() => newValue)
    }
    return (
        <SignInWithCodeTemplate onChange={onChangeHandle} onSubmit={onSubmit} pin={pin}/>
    )
}

describe('SignInWithCodeTemplate', () => {
    jest.useFakeTimers()
    it('should render correctly', () => {
        const tree = renderer.create(<SignInWithCodeTemplate />)
        expect(tree).toMatchSnapshot()
    })

    it('should enter the pin correctly', () => {
        const onChange = jest.fn()
        const { getByText } = render(<SignInWithCodeTemplate onChange={onChange} />)
        fireEvent.press(getByText('1'))
        expect(onChange).toBeCalledWith('1')
    })

    it('should call onSubmit when pin has been entered', async () => {
        const onSubmit = jest.fn()
        const { getByText } = render(<Stateful onSubmit={onSubmit}/>)
        fireEvent.press(getByText('1'))
        fireEvent.press(getByText('2'))
        fireEvent.press(getByText('3'))
        fireEvent.press(getByText('4'))
        setTimeout(() => expect(onSubmit).toBeCalledWith('1234'), 1000)
    })

    it('should not call onSubmit when wrong pin has been entered', async () => {
        const onSubmit = jest.fn()
        const { getByText } = render(<Stateful onSubmit={onSubmit}/>)
        fireEvent.press(getByText('1'))
        fireEvent.press(getByText('2'))
        fireEvent.press(getByText('3'))
        fireEvent.press(getByText('3'))
        setTimeout(() => expect(onSubmit).toBeCalledTimes(0), 1000)
    })
})
