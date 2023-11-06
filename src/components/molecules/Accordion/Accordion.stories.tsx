/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import Accordion from './Accordion'

const meta = {
    component: Accordion,
    argTypes: {
        // To write
    }
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
    args: {
        // To write
    }
}
