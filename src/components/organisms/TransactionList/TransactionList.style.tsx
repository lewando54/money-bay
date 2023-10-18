import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('screen')

export default StyleSheet.create({
    transactionsContainer: {
        gap: width * 0.0143
    }
})