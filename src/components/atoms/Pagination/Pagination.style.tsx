import { Dimensions, StyleSheet } from 'react-native'

const {width} = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        width: width * 0.128
    }
})
