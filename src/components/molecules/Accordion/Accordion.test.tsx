import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render, waitFor } from '@testing-library/react-native'

import Accordion from './Accordion'

describe('Accordion', () => {
    

    it('should render correctly', () => {
        const tree = renderer.create(<Accordion />)
        expect(tree).toMatchSnapshot()
    })

    it('should expand on press', async () => {
        const { getByTestId } = render(<Accordion />)

        const header = getByTestId('acc-header')
        const body = getByTestId('acc-body')

        waitFor(() => {}, {timeout: 1000})

        expect(body.props.style.height).toBe(0)
        fireEvent.press(header)
        expect(body.props.style.height).not.toBe(0)
    })
})
