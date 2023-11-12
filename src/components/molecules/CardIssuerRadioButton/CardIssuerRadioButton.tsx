import React from 'react'
import { Image, View } from 'react-native'

import { getIssuerLogo,TCardIssuer } from '../../../utils/cardIssuers'
import RadioButton, { IRadioButtonProps } from '../../atoms/RadioButton/RadioButton'
import UniversalContainer from '../../atoms/UniversalContainer/UniversalContainer'

import { GOOD_GREEN } from '../../../styling/GlobalTheme.style'
import CardIssuerRadioButtonStyle from './CardIssuerRadioButton.style'

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
