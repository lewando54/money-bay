import React from 'react'
import { View } from 'react-native'
import { SharedValue } from 'react-native-reanimated'

import { Dot } from '@atoms'
import { TOnboardingSlides } from '@organisms'
import { TCardsArray } from '@templates'

import paginationStyle from './Pagination.style'

import { MAIN_DARK } from '@styling/GlobalTheme.style'

interface IPaginationProps {
    data?: TOnboardingSlides | TCardsArray
    listOffsetX?: SharedValue<number>
    color?: string
    itemLengthPercent?: number
    testID?: string
}

export default function Pagination({
    data=[{id: 0, imageSource: require('../../../../assets/cardIssuers/mastercard.png'), heading: 'test', body: 'test', testID: 'testid'}],
    listOffsetX,
    color=MAIN_DARK,
    itemLengthPercent=1,
    testID
}: IPaginationProps){
    return (
        <View testID={testID} style={paginationStyle.container}>
            {data.map((_, index) => {
                return <Dot key={index} index={index} listOffsetX={listOffsetX} color={color} itemLengthPercent={itemLengthPercent}/>
            })}
        </View>
    )
}
