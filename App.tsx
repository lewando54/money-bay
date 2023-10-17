import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import { useFonts } from 'expo-font'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import OnboardingPage from './src/pages/OnboardingPage/OnboardingPage'
import SignInPage from './src/pages/SignInPage/SignInPage'

import GlobalThemeStyle, { MAIN_DARK } from './src/styling/GlobalTheme.style'
import { Entypo } from '@expo/vector-icons'
import SignInWithCodePage from './src/pages/SignInWithCodePage/SignInWithCodePage'

const Stack = createNativeStackNavigator()

function HeaderTitle (props) {
    return (
        <View><Text style={[GlobalThemeStyle.text_Medium, {color: MAIN_DARK, fontSize: 20}]}>{props.children}</Text></View>
    )
}

function App() {
    const [loaded] = useFonts({
        MulishMedium: require('./assets/fonts/Mulish/static/Mulish-Medium.ttf'),
        MulishBold: require('./assets/fonts/Mulish/static/Mulish-Bold.ttf'),
        MulishRegular: require('./assets/fonts/Mulish/static/Mulish-Regular.ttf'),
        MulishSemiBold: require('./assets/fonts/Mulish/static/Mulish-SemiBold.ttf')
    })

    if (!loaded) {
        return null
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={({ navigation, route }) => ({
                    headerLeft: (props) => <Pressable hitSlop={20} onPress={() => navigation.goBack()}>
                        <Entypo name="chevron-thin-left" size={20} color="black" />
                    </Pressable>,
                    headerShadowVisible: false,
                    headerTransparent: false,
                    headerStyle: {
                        backgroundColor: '#FAFCFF'
                    },
                    headerBackVisible: false,
                    contentStyle: {
                        backgroundColor: '#FAFCFF'
                    },
                    animation: 'slide_from_right',
                    headerTintColor: MAIN_DARK,
                    headerTitle: HeaderTitle,
                    headerTitleAlign: 'center'
                })}
            >
                <Stack.Screen 
                    name="Onboarding"
                    component={OnboardingPage}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="Sign In"
                    component={SignInPage}
                />
                <Stack.Screen
                    name="Sign In (with code)"
                    component={SignInWithCodePage}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

let AppEntryPoint = App

if (Constants.expoConfig.extra.storybookEnabled === 'true') {
    AppEntryPoint = require('./.storybook').default
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FAFCFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default AppEntryPoint
