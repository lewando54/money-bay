/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import Separator from './Separator'

const meta = {
    component: Separator,
    argTypes: {
        style: {control: 'object'}
    }
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof Separator>

export const Default: Story = {}

export const DifferentStyling: Story = {
    args: {
        style: {
            backgroundColor: 'red'
        }
    }
}