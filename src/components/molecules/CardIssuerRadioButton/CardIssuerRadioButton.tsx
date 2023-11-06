import React from 'react'
import { Image, View } from 'react-native'

import { getIssuerLogo,TCardIssuer } from '../../../utils/cardIssuers'
import RadioButton, { IRadioButtonProps } from '../../atoms/RadioButton/RadioButton'
import UniversalContainer from '../../atoms/UniversalContainer/UniversalContainer'

import { GOOD_GREEN } from '../../../styling/GlobalTheme.style'

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
        <View style={{flexShrink: 1, flexGrow: 0, alignItems: 'flex-start'}}>
            <UniversalContainer testID={testID} style={{flexDirection: 'row', backgroundColor: 'white', flexShrink: 1, flexGrow: 0, justifyContent: 'flex-start', alignItems: 'center', gap: 10, width: 'auto', paddingHorizontal: 20}}>
                <RadioButton chosen={chosen} id={id} group={group} onPress={onPress} color={color}/>
                <Image style={{resizeMode: 'contain', width: 40, maxHeight: 16}} source={getIssuerLogo(cardIssuer)}/>
            </UniversalContainer>
        </View>
    )
}
