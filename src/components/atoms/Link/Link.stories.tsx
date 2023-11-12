/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import Link from './Link'

const meta = {
    component: Link,
    argTypes: {
        onPress: {action: 'pressed'},
        children: {control: 'text'},
        style: {control: 'object'}
    }
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {
    args: {
        children: 'Test'
    }
}
