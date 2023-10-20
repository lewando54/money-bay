/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import SearchInput from './SearchInput'

const meta = {
    component: SearchInput,
    argTypes: {
        // To write
    }
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof SearchInput>

export const Default: Story = {
    args: {
        // To write
    }
}
