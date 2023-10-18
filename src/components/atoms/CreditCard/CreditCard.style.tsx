import { Dimensions, StyleSheet } from 'react-native'

const {width, height} = Dimensions.get('screen')

export default StyleSheet.create({
    cardView: {
        flexDirection: 'row', 
        aspectRatio: 16/9, 
        width: width * 0.7733,
        borderRadius: 10
    },
    blurView: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    cardBorderMask: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'transparent',
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linearGradient: { 
        flex: 1,
        height: '100%',
        opacity: 0.5
    },
    cardIssuerLogo: {
        width: 40,
        aspectRatio: 16/9,
        resizeMode: 'contain'
    },
    cardName: {
        letterSpacing: 3,
        fontSize: 14,
        color: 'white'
    },
    separator: {
        backgroundColor: 'white',
        width: 0.5,
        height: 21,
        opacity: 0.5
    },
    cardNumber: {
        fontSize: 12
    },
    secondaryText: {
        fontSize: 8,
        opacity: 0.5,
        textTransform: 'uppercase'
    },
    infoBoxesWrapper: {
        flexDirection: 'row', 
        marginTop: 'auto',
        justifyContent: 'space-between'
    },
    infoBox: {
        gap: 5
    },
    infoBoxData: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 7
    },
    balanceBox: {
        flexDirection: 'row'
    },
    balanceInt: {
        fontSize: 24
    },
    cardExpiry: {
        opacity: 0.8
    }
})