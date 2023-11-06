import React from 'react'
import { View } from 'react-native'
import { SharedValue } from 'react-native-reanimated'

import { TOnboardingSlides } from '../../organisms/OnboardingSlides/OnboardingSlides'
import { TCardsArray } from '../../templates/DashboardTemplate/DashboardTemplate'
import Dot from '../Dot/Dot'

import { MAIN_DARK } from '../../../styling/GlobalTheme.style'
import paginationStyle from './Pagination.style'

interface IPaginationProps {
    data?: TOnboardingSlides | TCardsArray
    x?: SharedValue<number>
    color?: string
    itemLengthPercent?: number
    testID?: string
}

export default function Pagination({
    data=[{id: 0, imageSource: require('../../../../assets/cardIssuers/mastercard.png'), heading: 'test', body: 'test', testID: 'testid'}],
    x,
    color=MAIN_DARK,
    itemLengthPercent=1,
    testID
}: IPaginationProps){
    return (
        <View testID={testID} style={paginationStyle.container}>
            {data.map((_, index) => {
                return <Dot key={index} index={index} x={x} color={color} itemLengthPercent={itemLengthPercent}/>
            })}
        </View>
    )
}
