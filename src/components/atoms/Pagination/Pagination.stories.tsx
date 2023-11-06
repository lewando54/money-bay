/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import Pagination from './Pagination'

const meta = {
    component: Pagination,
    argTypes: {
        // To write
    }
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
    args: {
        // To write
    }
}
