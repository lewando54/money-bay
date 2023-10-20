/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import Link from './Link'

const meta = {
    component: Link,
    argTypes: {
        // To write
    }
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {
    args: {
        // To write
    }
}
