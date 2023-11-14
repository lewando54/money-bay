import React from 'react'
import { View } from 'react-native'

import { SocialButton } from '@atoms'
import { TiconProp } from 'src/components/atoms/SocialButton/SocialButton'

import socialButtonListStyle from './SocialButtonList.style'

export type TSocialsArray = Array<{ id: number, color: string, icon: TiconProp, href: URL['href'], testId?: string }>
interface ISocialButtonList {
  socials: TSocialsArray
  testId?: string
}

function SocialButtonList ({ socials, testId }: ISocialButtonList): React.ReactElement {
    const socialItems = socials.map(social =>
        <SocialButton size={28} key={social.id} color={social.color} href={social.href} icon={social.icon} testId={testId + social.id.toString()}/>
    )

    return (
        <View testID={testId} style={socialButtonListStyle.div}>
            {socialItems}
        </View>
    )
}

export default SocialButtonList
