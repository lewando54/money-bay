import React from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import { useFonts } from 'expo-font'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import OnboardingPage from './src/pages/OnboardingPage/OnboardingPage'
import SignInPage from './src/pages/SignInPage/SignInPage'

import GlobalThemeStyle, { LINK_COLOR, MAIN_DARK } from './src/styling/GlobalTheme.style'
import { Entypo } from '@expo/vector-icons'
import SignInWithCodePage from './src/pages/SignInWithCodePage/SignInWithCodePage'
import DashboardPage from './src/pages/DashboardPage/DashboardPage'

import Images from 'assets/images'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const { width, height } = Dimensions.get('screen')

function HeaderTitle (props) {
    return (
        <View><Text style={[GlobalThemeStyle.text_Medium, {color: MAIN_DARK, fontSize: 20}]}>{props.children}</Text></View>
    )
}

function PlaceholderPage () {
    return (
        <View style={{flex: 1}}>
            <Text>Test</Text>
        </View>
    )
}

/*
    safeDepositSVG: SafeDeposit,
    walletSVG: Wallet,
    notificationBellSVG: NotificationBell,
    categorySVG: Category
*/

function Main(){
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: LINK_COLOR,
                tabBarInactiveTintColor: MAIN_DARK,
                tabBarStyle: {
                    paddingTop: 9,
                    paddingBottom: 9,
                    height: height * 0.0775,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                }
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={DashboardPage}
                options={{
                    headerShown: false,
                    headerStyle: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20
                    },
                    tabBarLabelStyle: {
                        fontFamily: 'MulishSemiBold',
                        fontSize: 10
                    },
                    tabBarIcon: ({ focused, color, size }) => <Images.reportSVG color={color}/>
                }}
            />
            <Tab.Screen
                name="Deposits"
                component={PlaceholderPage}
                options={{
                    tabBarIcon: ({ focused, color, size }) => <Images.safeDepositSVG color={color}/>
                }}
            />
            <Tab.Screen
                name="Loans"
                component={PlaceholderPage}
                options={{
                    tabBarIcon: ({ focused, color, size }) => <Images.walletSVG color={color}/>
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={PlaceholderPage}
                options={{
                    tabBarIcon: ({ focused, color, size }) => <Images.notificationBellSVG color={color}/>,
                    tabBarBadge: '',
                    tabBarBadgeStyle: {
                        maxHeight: 8,
                        maxWidth: 7,
                        backgroundColor: LINK_COLOR
                    }
                }}
            />
            <Tab.Screen
                name="More"
                component={PlaceholderPage}
                options={{
                    tabBarIcon: ({ focused, color, size }) => <Images.categorySVG color={color}/>
                }}
            />
        </Tab.Navigator>
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
                initialRouteName='Onboarding'
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
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Transaction history"
                    component={PlaceholderPage}
                    options={{
                        animation: 'fade_from_bottom'
                    }}
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
