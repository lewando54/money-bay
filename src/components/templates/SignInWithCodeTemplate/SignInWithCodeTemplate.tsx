import React, { useState } from 'react'
import signInWithCodeTemplateStyle from './SignInWithCodeTemplate.style'
import { ImageBackground, View, Image, Text, ImageSourcePropType, Dimensions } from 'react-native'

import Close from './assets/ep_close.svg'
import FaceID from './assets/faceid-line.svg'
import Link from '../../atoms/Link/Link'
import Images from 'assets/images'
import SquareButtonWithIcon from '../../molecules/SquareButtonWithIcon/SquareButtonWithIcon'
import UniversalContainer from '../../atoms/UniversalContainer/UniversalContainer'
import GlobalThemeStyle, { MAIN_DARK } from '../../../styling/GlobalTheme.style'

interface ISignInWithCodeTemplateProps {
    name?: string
    subname?: string
    profilePicture?: ImageSourcePropType
    pin?: string
    onSubmit?: (pin: string) => void
    onChange?: (newValue: string) => void
    onFaceidPress?: () => void
    onClosePress?: () => void
    testID?: string
}

export default function SignInWithCodeTemplate({
    name='Cristina Wolf',
    subname='Labore sunt',
    profilePicture=Images.profile,
    pin='',
    onSubmit,
    onChange,
    onFaceidPress,
    onClosePress,
    testID
}: ISignInWithCodeTemplateProps){
    const keypadArray = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 'faceid', 0, 'close'
    ]

    const {width, height} = Dimensions.get('screen')

    const onChangeHandle = (newValue: number) => {
        if(onChange){
            onChange(pin + newValue.toString())
        }
        if(pin.length == 4){
            if(onSubmit){
                onSubmit(pin)
            }
            onChange('')
        }
    }

    const Keypad = keypadArray.map((el, index) => {
        if(typeof el == 'number'){
            return <UniversalContainer 
                key={index}
                style={signInWithCodeTemplateStyle.button}
                castShadow={true}
                onPress={() => onChangeHandle(el)}>
                <Text style={signInWithCodeTemplateStyle.buttonText}>{el}</Text>
            </UniversalContainer>
        }
        else if(el === 'faceid'){
            return <UniversalContainer
                key={index}
                style={signInWithCodeTemplateStyle.button}
                castShadow={true}
                onPress={onFaceidPress}>
                <FaceID />
            </UniversalContainer>
        }
        else if(el === 'close'){
            return <UniversalContainer 
                key={index}
                style={signInWithCodeTemplateStyle.button}
                castShadow={true}
                onPress={onClosePress}>
                <Close />
            </UniversalContainer>
        }
    })

    return (
        <View testID={testID} style={{flex: 1}}>
            <Image source={Images.bgSignIn} style={signInWithCodeTemplateStyle.background} />
            <View style={signInWithCodeTemplateStyle.mainContainer}>
                <Image source={profilePicture} style={signInWithCodeTemplateStyle.profilePicture}/>
                <Text>{name}</Text>
                <Text>{subname}</Text>
                <View style={signInWithCodeTemplateStyle.buttonContainer}>
                    {Keypad}
                </View>
                <Link>Lost your password?</Link>
                <Link>Switch user</Link>
            </View>
        </View>
    )
}
