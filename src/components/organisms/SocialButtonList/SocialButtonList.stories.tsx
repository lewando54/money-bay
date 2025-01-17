/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta,StoryObj } from '@storybook/react-native'

import SocialButtonList from './SocialButtonList'

const meta = {
    component: SocialButtonList,
    argTypes: {
        socials: { control: 'array' }
    }
} satisfies Meta<typeof SocialButtonList>

export default meta
type Story = StoryObj<typeof SocialButtonList>

export const Default: Story = {
    args: {
        socials: [
            { id: 0, color: '#3B5999', icon: 'facebook', href: 'https://google.pl/' },
            { id: 1, color: '#55ACEE', icon: 'twitter', href: 'https://google.pl/' },
            { id: 2, color: '#DD4B39', icon: 'google', href: 'https://google.pl/' }
        ],
    }
}