import React from 'react'
import{
    View,
    Text,
    Image,
    StyleSheet,
    ActivityIndicator,
} from 'react-native'
export default function Loading(props){
    return(
        <View>
            <Image 
                source={ require('../../../assets/logo.png') }
                style={styles.logo}
            />
              <ActivityIndicator />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent: 'center',
    },
    logo:{
        width:200,
        height:80,
        resizeMode:'contain',
        marginBottom:10,
    }
})