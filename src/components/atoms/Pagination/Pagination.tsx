import React from 'react'
import paginationStyle from './Pagination.style'
import { TOnboardingSlide } from '../../organisms/OnboardingSlides/OnboardingSlides'
import { SharedValue } from 'react-native-reanimated'
import { View } from 'react-native'
import Dot from '../Dot/Dot'
import { MAIN_DARK } from '../../../styling/GlobalTheme.style'

interface IPaginationProps {
    data?: TOnboardingSlide
    x?: SharedValue<number>
    color?: string
    testID?: string
}

export default function Pagination({
    data=[{id: 0, imageSource: require('../../../../assets/cardIssuers/mastercard.png'), heading: 'test', body: 'test', testID: 'testid'}],
    x,
    color=MAIN_DARK,
    testID
}: IPaginationProps){
    return (
        <View testID={testID} style={paginationStyle.container}>
            {data.map((_, index) => {
                return <Dot key={index} index={index} x={x} color={color}/>
            })}
        </View>
    )
}
