import React from 'react'
import { Dimensions, Pressable, Text, View } from 'react-native'
import Images from '@assets/images'
import { Entypo } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Constants from 'expo-constants'
import { useFonts } from 'expo-font'

import AccountSuccessPage from './src/pages/AccountSuccessPage/AccountSuccessPage'
import DashboardPage from './src/pages/DashboardPage/DashboardPage'
import MobilePaymentPage from './src/pages/MobilePaymentPage/MobilePaymentPage'
import NewPasswordPage from './src/pages/NewPasswordPage/NewPasswordPage'
import OnboardingPage from './src/pages/OnboardingPage/OnboardingPage'
import PaymentSuccessPage from './src/pages/PaymentSuccessPage/PaymentSuccessPage'
import SignInPage from './src/pages/SignInPage/SignInPage'
import SignInWithCodePage from './src/pages/SignInWithCodePage/SignInWithCodePage'
import SignUpPage from './src/pages/SignUpPage/SignUpPage'
import TransactionDetailsPage from './src/pages/TransactionDetailsPage/TransactionDetailsPage'
import TransactionHistoryPage from './src/pages/TransactionHistoryPage/TransactionHistoryPage'
import GlobalThemeStyle, { LINK_COLOR, MAIN_DARK } from './src/styling/GlobalTheme.style'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const { height } = Dimensions.get('screen')

export type TabParamList = {
    'Dashboard': undefined
    'Deposits': undefined
    'Loans': undefined
    'Notifications': undefined
    'More': undefined
}

export type RootStackParamList = {
    'Onboarding': undefined
    'Sign In': undefined
    'New password': undefined
    'Sign up': undefined
    'Account success': undefined
    'Payment success': { wholeAmount: string, decimalAmount: string, phoneNumber: string }
    'Transaction details': {wholeAmount: string, decimalAmount: string}
    'Mobile payment': undefined
    'Sign In (with code)': undefined
    'Main': NavigatorScreenParams<TabParamList>
    'Transaction history': undefined
}

interface IHeaderTitleProps {
    children: React.ReactNode
}

function HeaderTitle (props: IHeaderTitleProps) {
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
                    tabBarIcon: ({ color }) => <Images.reportSVG color={color}/>
                }}
            />
            <Tab.Screen
                name="Deposits"
                component={PlaceholderPage}
                options={{
                    tabBarIcon: ({ color }) => <Images.safeDepositSVG color={color}/>
                }}
            />
            <Tab.Screen
                name="Loans"
                component={PlaceholderPage}
                options={{
                    tabBarIcon: ({ color }) => <Images.walletSVG color={color}/>
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={PlaceholderPage}
                options={{
                    tabBarIcon: ({ color }) => <Images.notificationBellSVG color={color}/>,
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
                    tabBarIcon: ({ color }) => <Images.categorySVG color={color}/>
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
                screenOptions={({ navigation }) => ({
                    headerLeft: () => <Pressable hitSlop={20} onPress={() => navigation.goBack()}>
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
                    name="New password"
                    component={NewPasswordPage}
                />
                <Stack.Screen 
                    name="Sign up"
                    component={SignUpPage}
                />
                <Stack.Screen 
                    name="Account success"
                    component={AccountSuccessPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Payment success"
                    component={PaymentSuccessPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Transaction details"
                    component={TransactionDetailsPage}
                    options={{
                        headerTitle: '',
                        headerTransparent: true,
                        headerStyle: {
                            backgroundColor: '#0000'
                        },
                    }}
                />
                <Stack.Screen 
                    name="Mobile payment"
                    component={MobilePaymentPage}
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
                    component={TransactionHistoryPage}
                    options={{
                        animation: 'fade_from_bottom'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

let AppEntryPoint = App

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    AppEntryPoint = require('./.storybook').default
}

export default AppEntryPoint
