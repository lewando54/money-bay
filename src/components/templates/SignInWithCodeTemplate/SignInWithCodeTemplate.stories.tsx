/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react-native'
import Images from '@assets/images'
import SignInWithCodeTemplate from './SignInWithCodeTemplate'

const meta = {
    component: SignInWithCodeTemplate,
    argTypes: {
        name: {control: 'text'},
        subname: {control: 'text'},
        profilePicture: {control: 'file'},
        pin: {control: 'text'},
        onSubmit: {action: 'Submitted'},
        onChange: {action: 'PinButton Pressed'},
        onFaceidPress: {action: 'FaceidPress Pressed'},
        onClosePress: {action: 'ClosePress Pressed'},
        onLostPasswordPress: {action: 'LostPasswordPress Pressed'}
    }
} satisfies Meta<typeof SignInWithCodeTemplate>

export default meta
type Story = StoryObj<typeof SignInWithCodeTemplate>

export const Default: Story = {
    args: {
        name: 'Cristina Wolf',
        subname: 'Labore sunt',
        profilePicture: Images.profilePicture,
        pin: '',
    }
}
