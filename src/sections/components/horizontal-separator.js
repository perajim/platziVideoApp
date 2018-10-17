import React from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'

export default function HorizontalSeparator(props){
    return(
        <View
            style={styles.separator}
        /> 
    )
}

const styles = {
    separator:{
        flex:1,
        marginHorizontal:5,

    }
}