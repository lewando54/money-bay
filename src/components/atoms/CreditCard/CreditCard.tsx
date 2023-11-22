import React from 'react'
import { Image, View } from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view'
import { BlurView } from 'expo-blur'
import { LinearGradient } from 'expo-linear-gradient'

import { CustomText } from '@atoms'
import { getIssuerLogo,TCardIssuer } from '@utils/cardIssuers'
import { TCurrency as TCurrency } from '@utils/currency'

import creditCardStyle from './CreditCard.style'

import globalThemeStyle from '@styling/GlobalTheme.style'

interface ICreditCardProps {
    cardIssuer?: TCardIssuer
    cardName?: string
    cardNumber?: string
    cardExpiryDate?: Date
    cardBalance?: number
    cardCurrency?: TCurrency
    testID?: string
}

export default function CreditCard({
    cardIssuer = 'visa',
    cardName = 'bay platinum',
    cardNumber = '1234 **** **** 1234',
    cardExpiryDate = new Date('2023-12-19'),
    cardBalance = 4863.27,
    cardCurrency = {iso: 'usd', symbol: '$', left: true},
    testID = 'creditcard'
}: ICreditCardProps){
    // if MaskedView creates an error, go to node_modules/@react-native-masked-view/masked-view/types/index.d.ts
    // And change:
    /*
        declare class MaskedViewComponent extends React.Component<MaskedViewProps> {}
        declare const MaskedViewBase: ReactNative.Constructor<
        ReactNative.NativeMethods
        > &
        typeof MaskedViewComponent;
        export default class MaskedView extends MaskedViewBase {}
    */
    // to:
    /*
        declare class MaskedViewComponent extends React.Component<MaskedViewProps> {}
        export default class MaskedView extends MaskedViewComponent {}
    */
    return (
        <View style={creditCardStyle.cardView} testID={testID}>
            <MaskedView
                style={{width: '100%'}}
                maskElement={
                    <View style={creditCardStyle.cardBorderMask}>
                        <BlurView intensity={100} style={creditCardStyle.blurView}>
                        </BlurView>
                    </View>
                }
            >
                <LinearGradient 
                    style={creditCardStyle.linearGradient}
                    colors={['#161966', '#AEB1FF', '#FF97B4']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                >
                </LinearGradient>
            </MaskedView>
            <View style={{position: 'absolute', paddingVertical: 20, flex: 1, height: '100%', width: '100%', paddingHorizontal: 20, gap: 14}}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 13}}>
                    <Image 
                        style={creditCardStyle.cardIssuerLogo} 
                        source={getIssuerLogo(cardIssuer)}>
                    </Image>
                    <View style={creditCardStyle.separator}></View>
                    <CustomText style={[globalThemeStyle.text_Regular, creditCardStyle.cardName]}>{cardName}</CustomText>
                </View>
                <View>
                    <CustomText style={[globalThemeStyle.text_Regular, creditCardStyle.cardNumber]}>
                        {cardNumber}
                    </CustomText>
                </View>
                <View style={creditCardStyle.infoBoxesWrapper}>
                    <View style={creditCardStyle.infoBox}>
                        <CustomText style={[globalThemeStyle.text_Regular, creditCardStyle.secondaryText]}>
                            Balance
                        </CustomText>
                        <View style={creditCardStyle.infoBoxData}>
                            <CustomText style={[globalThemeStyle.text_Bold, {fontSize: 23}, !cardCurrency.left && {display: 'none'}]}>
                                {cardCurrency.symbol}
                            </CustomText>
                            <View style={creditCardStyle.balanceBox}>
                                <CustomText style={[globalThemeStyle.text_Bold, {marginBottom: 0}, creditCardStyle.balanceInt]}>
                                    {Math.floor(cardBalance).toLocaleString('en-US', {minimumIntegerDigits: 2}).replace(',', ' ')}.
                                </CustomText>
                                <CustomText style={[globalThemeStyle.text_Bold, {height: '100%', paddingTop: 11}]}>
                                    {((cardBalance * 100) % 100).toLocaleString('en-US', {minimumIntegerDigits: 2})}
                                </CustomText>
                                <CustomText style={[globalThemeStyle.text_Bold, {fontSize: 12, marginLeft: 7, paddingTop: 12.7}, cardCurrency.left && {display: 'none'}]}>
                                    {cardCurrency.symbol}
                                </CustomText>
                            </View>
                        </View>
                    </View>
                    <View style={creditCardStyle.infoBox}>
                        <CustomText style={[globalThemeStyle.text_Regular, creditCardStyle.secondaryText]}>
                            Expire
                        </CustomText>
                        <View style={creditCardStyle.infoBoxData}>
                            <View style={creditCardStyle.balanceBox}>
                                <CustomText style={[globalThemeStyle.text_Medium, creditCardStyle.cardExpiry]}>
                                    {cardExpiryDate.getMonth() + 1}/{('' + cardExpiryDate.getFullYear()).substring(2)}
                                </CustomText>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}