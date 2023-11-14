import React from 'react'
import { Image, View } from 'react-native'

import { RadioButton, UniversalContainer } from '@atoms'
import { getIssuerLogo,TCardIssuer } from '@utils/cardIssuers'
import { IRadioButtonProps } from 'src/components/atoms/RadioButton/RadioButton'

import CardIssuerRadioButtonStyle from './CardIssuerRadioButton.style'

import { GOOD_GREEN } from '@styling/GlobalTheme.style'

interface ICardIssuerRadioButtonProps extends IRadioButtonProps {
    cardIssuer?: TCardIssuer
}

export default function CardIssuerRadioButton({
    cardIssuer='visa-color',
    chosen=false,
    color=GOOD_GREEN,
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
