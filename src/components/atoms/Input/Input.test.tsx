import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render } from '@testing-library/react-native'

import Input from './Input'
import inputStyle from './Input.style'

describe('Input', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<Input />)
        expect(tree).toMatchSnapshot()
    })

    it('should apply focused style when input is focused and remove it when blurred', () => {
        const { getByTestId } = render(<Input testID='textinput-test'/>)

        const input = getByTestId('textinput-test')
        const container = getByTestId('universal-container')
        expect(container.props.style[2]).not.toContain(inputStyle.focused)

        fireEvent(input, 'focus')
        expect(container.props.style[2]).toContain(inputStyle.focused)

        fireEvent(input, 'blur')
        expect(container.props.style[2]).not.toContain(inputStyle.focused)
    })

    it('should pass typed text to passed onChange', () => {
        const onChange = jest.fn()

        const { getByTestId } = render(
            <Input
                value={'text'} 
                placeholder={'placeholder'} 
                secureTextEntry={false} 
                testID='textinput-test'
                onChange={onChange}
            />
        )
        const input = getByTestId('textinput-test')
        fireEvent.changeText(input, 'new value')
        expect(onChange).toBeCalledWith('new value')
    })

    it('should display icon when isIconVisible is true', () => {
        const tree = renderer.create(<Input isIconVisible={true}/>)
        expect(tree).toMatchSnapshot()
    })
})
