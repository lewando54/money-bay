import React from 'react'
import { Image, View } from 'react-native'

import { IRadioButtonProps, RadioButton, UniversalContainer } from '@atoms'
import { getIssuerLogo,TCardIssuer } from '@utils/cardIssuers'

import CardIssuerRadioButtonStyle from './CardIssuerRadioButton.style'

import { globalColors } from '@styling/GlobalTheme.style'

interface ICardIssuerRadioButtonProps extends IRadioButtonProps {
    cardIssuer?: TCardIssuer
}

export default function CardIssuerRadioButton({
    cardIssuer='visa-color',
    chosen=false,
    color=globalColors.GOOD_GREEN,
    id=0,
    group='default',
    onPress,
    testID
}: ICardIssuerRadioButtonProps){
    return (
        <View style={CardIssuerRadioButtonStyle.mainContainer}>
            <UniversalContainer testID={testID} style={CardIssuerRadioButtonStyle.univContainer}>
                <RadioButton chosen={chosen} id={id} group={group} onPress={onPress} color={color}/>
                <Image style={CardIssuerRadioButtonStyle.image} source={getIssuerLogo(cardIssuer)}/>
            </UniversalContainer>
        </View>
    )
}
