import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render, screen } from '@testing-library/react-native'

import Button from './Button'

import { globalColors } from '@styling/GlobalTheme.style'

describe('Button', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<Button testID='test' color="primary">Click me</Button>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('should render with primary color by default', () => {
        const tree = renderer.create(<Button testID='test'>Click me</Button>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('should render innerHTML text', () => {
        const { getByText } = render(<Button testID='test' color="secondary">Click me</Button>)
        expect(getByText('Click me')).toBeTruthy()
    })

    it('should render with primary gradient colors', () => {
        const { getByTestId } = render(<Button testID='button' color={'primary'}>Click me</Button>)
        expect( getByTestId('button').props.children[0].props.colors[0]).toEqual(globalColors.PRIMARY_GRADIENT_START_COLOR)
        expect( getByTestId('button').props.children[0].props.colors[1]).toEqual(globalColors.PRIMARY_GRADIENT_END_COLOR)
    })

    it('should render with secondary color', () => {
        const { getByTestId } = render(<Button testID='button' color={'secondary'}>Click me</Button>)
        expect( getByTestId('button').props.children[0].props.colors[0]).toEqual(globalColors.SECONDARY_GRADIENT_FULL_COLOR)
        expect( getByTestId('button').props.children[0].props.colors[1]).toEqual(globalColors.SECONDARY_GRADIENT_FULL_COLOR)
    })

    it('should render with custom color', () => {
        render(<Button testID='button' color={'#fff'}>Click me</Button>)
        expect(screen.getByTestId('button').props.children[0].props.colors[0]).toEqual('#fff')
        expect(screen.getByTestId('button').props.children[0].props.colors[1]).toEqual('#fff')
    })

    it('should render small variant', () => {
        const tree = renderer.create(<Button testID='test' color="primary" size={'small'}>Click me</Button>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('should render normal variant', () => {
        const tree = renderer.create(<Button testID='test' color="primary" size={'normal'}>Click me</Button>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('should call onClick function when clicked', () => {
        const onClick = jest.fn()
        const { getByTestId } = render(<Button testID='test' onClick={onClick}>Click me</Button>)
        fireEvent.press(getByTestId('test'))
        expect(onClick).toHaveBeenCalled()
    })
})
