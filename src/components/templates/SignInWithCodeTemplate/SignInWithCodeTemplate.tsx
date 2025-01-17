﻿import React from 'react'
import { Image, ImageSourcePropType, View } from 'react-native'
import { Easing, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated'

import Images from '@assets/images'
import { CustomText } from '@atoms'
import { Link, UniversalContainer } from '@atoms'
import { PinDots } from '@molecules'

import Close from './assets/ep_close.svg'
import FaceID from './assets/faceid-line.svg'
import signInWithCodeTemplateStyle from './SignInWithCodeTemplate.style'

interface ISignInWithCodeTemplateProps {
    name?: string
    subname?: string
    profilePicture?: ImageSourcePropType
    pin?: string
    onSubmit?: (pin: string) => boolean
    onChange?: (newValue: string) => void
    onFaceidPress?: () => void
    onClosePress?: () => void
    onLostPasswordPress?: () => void
    testID?: string
}

export default function SignInWithCodeTemplate({
    name='Cristina Wolf',
    subname='Labore sunt',
    profilePicture=Images.profilePicture,
    pin='',
    onSubmit,
    onChange,
    onFaceidPress,
    onClosePress,
    onLostPasswordPress,
    testID
}: ISignInWithCodeTemplateProps){
    const keypadArray = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 'faceid', 0, 'close'
    ]

    const xTransform = useSharedValue(0)

    const OFFSET = 10
    const TIME = 100

    const onChangeHandle = (newValue: number) => {
        if(onChange){
            onChange(pin + newValue.toString())
        }
        if(pin.length == 3){
            setTimeout(() => {
                let isCorrect = false
                if(onSubmit){
                    isCorrect = onSubmit(pin + newValue.toString())
                }
                if(isCorrect){
                    console.log('correct')
                }
                else{
                    xTransform.value = withSequence(
                        withTiming(-OFFSET, { duration: TIME / 2, easing: Easing.exp }),
                        withRepeat(withTiming(OFFSET, { duration: TIME, easing: Easing.exp }), 2, true),
                        withTiming(0, { duration: TIME / 2, easing: Easing.exp })
                    )
                    console.log('incorrect')
                }
                onChange('')
            }, 500)
        }
    }

    const Keypad = keypadArray.map((el, index) => {
        if(typeof el == 'number'){
            return <UniversalContainer 
                key={index}
                style={signInWithCodeTemplateStyle.button}
                castShadow={true}
                onPress={() => onChangeHandle(el)}>
                <CustomText style={signInWithCodeTemplateStyle.buttonText}>{el}</CustomText>
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
                <View style={signInWithCodeTemplateStyle.usernameContainer}>
                    <CustomText style={signInWithCodeTemplateStyle.usernameText}>{name}</CustomText>
                    <CustomText style={signInWithCodeTemplateStyle.usernameSubText}>{subname}</CustomText>
                </View>
                <PinDots currLength={pin.length} xTransform={xTransform}/>
                <View style={signInWithCodeTemplateStyle.buttonContainer}>
                    {Keypad}
                </View>
                <Link onPress={onLostPasswordPress}>Lost your password?</Link>
                <Link>Switch user</Link>
            </View>
        </View>
    )
}
