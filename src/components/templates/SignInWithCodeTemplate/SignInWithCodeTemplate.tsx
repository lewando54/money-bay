import React from 'react'
import signInWithCodeTemplateStyle from './SignInWithCodeTemplate.style'
import { View, Image, Text, ImageSourcePropType } from 'react-native'

import Close from './assets/ep_close.svg'
import FaceID from './assets/faceid-line.svg'
import Link from '../../atoms/Link/Link'
import Images from 'assets/images'
import UniversalContainer from '../../atoms/UniversalContainer/UniversalContainer'
import PinDots from '../../molecules/PinDots/PinDots'
import { Easing, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated'

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
    profilePicture=Images.profile,
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

    const x = useSharedValue(0)

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
                    x.value = withSequence(
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
                <View style={signInWithCodeTemplateStyle.usernameContainer}>
                    <Text style={signInWithCodeTemplateStyle.usernameText}>{name}</Text>
                    <Text style={signInWithCodeTemplateStyle.usernameSubText}>{subname}</Text>
                </View>
                <PinDots currLength={pin.length} x={x}/>
                <View style={signInWithCodeTemplateStyle.buttonContainer}>
                    {Keypad}
                </View>
                <Link onPress={onLostPasswordPress}>Lost your password?</Link>
                <Link>Switch user</Link>
            </View>
        </View>
    )
}
