/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'

import SocialButton from './SocialButton'

const meta = {
    component: SocialButton,
    argTypes: {
        color: { control: 'color' },
        href: { control: 'text' },
        icon: { control: 'select', options: ['google', 'facebook', 'linkedin'] },
        size: { control: 'number' }
    }
} satisfies Meta<typeof SocialButton>

export default meta
type Story = StoryObj<typeof SocialButton>

export const Default: Story = {
    args: {
        color: 'red',
        href: 'https://google.pl',
        icon: 'google',
        testId: '1',
        size: 30
    }
}