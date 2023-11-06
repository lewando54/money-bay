/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Meta,StoryObj } from '@storybook/react-native'

import CircleWithIcon from '../CircleWithIcon/CircleWithIcon'

function ExampleChildren(){
    return (
        <View style={{justifyContent: 'space-between', alignItems: 'center', width: '100%', flexDirection: 'row'}}>
            <CircleWithIcon icon={<MaterialIcons name="compare-arrows" size={24} color="black" />}/>
            <Text>
                + 234.00 zł
            </Text>
        </View>
    )
}

import UniversalContainer from './UniversalContainer'

const meta = {
    component: UniversalContainer,
    argTypes: {
        width: { control: 'text' },
        padding: { control: 'number'},
        backgroundColor: { control: 'color' },
        castShadow: { control: 'boolean' }
    }
} satisfies Meta<typeof UniversalContainer>

export default meta
type Story = StoryObj<typeof UniversalContainer>

export const Default: Story = {
    args: {
        width: '100%'
    }
}

export const CastShadow: Story = {
    args: {
        width: '100%',
        castShadow: true
    }
}

export const CustomBackground: Story = {
    args: {
        width: '100%',
        backgroundColor: '#f00'
    }
}

export const WithChildren: Story = {
    args: {
        width: '100%',
        children: <ExampleChildren />
    }
}