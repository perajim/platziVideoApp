import React, { Component } from 'react'
import Video from 'react-native-video'
import { StyleSheet, ActivityIndicator, Text } from 'react-native'
import Layout from '../components/layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'

export default class Player extends Component {
    state={
        loading:true,
        paused:false,
    }
    onBuffer= ({ isBuffering }) =>{
        this.setState({
            loading: isBuffering
        })

    }
    playPause=() =>{
        this.setState.paused({
            paused:  !this.state.paused
        })
    }
    render(){
        return (
            <Layout
            
            video={
                <Video 
                    source={{uri:'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}            
                    reziseMode='contain'
                    style={styles.video}
                    onBuffer={this.onBuffer}
                    paused={this.state.paused}
                />
            }
            loader={
                <ActivityIndicator color="red" />
              }
              controls={
                  <ControlLayout>
                    <PlayPause
                        onPress={this.playPause}
                        paused={this.state.paused}
                     />
                    <Text></Text>
                  </ControlLayout>
              }
        />
        )
    }
}

const styles = StyleSheet.create({  
    video: {
        position:"absolute",
        left:0,
        right:0,
        bottom:0,
        top:0,
    }
})