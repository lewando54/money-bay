import React from 'react'
import onboardingSlidesStyle from './OnboardingSlides.style'
import { ImageSourcePropType, View } from 'react-native'
import OnboardingSlide from '../../molecules/OnboardingSlide/OnboardingSlide'
import Button from '../../atoms/Button/Button'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import Pagination from '../../atoms/Pagination/Pagination'

export type TOnboardingSlides = Array<{ 
    id: number, 
    imageSource: ImageSourcePropType, 
    heading: string
    body: string
    testID: string 
}>

interface IOnboardingSlidesProps {
    data?: TOnboardingSlides
    onPress?: () => void
    testID?: string
}

export default function OnboardingSlides({
    data=[
        {
            id: 0,
            imageSource: require('./assets/onboarding-2.png'),
            heading: 'Welcome to MoneyBay app!',
            body: 'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
            testID: 'slide-0'
        },
        {
            id: 1,
            imageSource: require('./assets/onboarding-3.png'),
            heading: 'Get a new card in a few clicks!',
            body: 'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
            testID: 'slide-0'
        },
        {
            id: 2,
            imageSource: require('./assets/onboarding-4.png'),
            heading: 'Easy payments all over the world!',
            body: 'Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.',
            testID: 'slide-0'
        }
    ],
    onPress,
    testID
}: IOnboardingSlidesProps){
    const x = useSharedValue(0)
    const onScrollHandle = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x
        }
    })

    return (
        <>
            <View style={onboardingSlidesStyle.buttonContainer}>
                <Pagination data={data} x={x} />
                <Button onClick={onPress}>Get started</Button>
            </View>
            <View testID={testID}>
                <Animated.FlatList
                    data={data}
                    renderItem={({item, index}) => <OnboardingSlide 
                        id={item.id}
                        index={index}
                        imageSource={item.imageSource}
                        heading={item.heading}
                        body={item.body}
                        opacity={x}
                        testID={item.testID}
                    />}
                    horizontal
                    pagingEnabled
                    snapToAlignment='center'
                    showsHorizontalScrollIndicator={false}
                    overScrollMode='auto'
                    onScroll={onScrollHandle}
                    viewabilityConfig={{
                        viewAreaCoveragePercentThreshold: 10
                    }}
                />
            </View>
        </>
    )
}
