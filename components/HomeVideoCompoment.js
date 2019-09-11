import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    WebView,
    ActivityIndicator
} from 'react-native'
import Video from 'react-native-video';
import store from '../pages/store'
import {videoPlayEndEvent} from "../pages/action/index";
export default class HomeVideoCompoment extends Component {
    onEnd() {
        //alert('视频播放完毕');
        //发送事件
        store.dispatch(videoPlayEndEvent());
    };

    constructor(props) {
        super(props);
        this.state = {
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'cover',
            duration: 0.0,
            currentTime: 0.0,
            paused: false,
        }
    }

    render() {
        return <View style={styles.container}>
            <Video
                ref={(ref: Video) => {
                    this.video = ref
                }}
                /* For ExoPlayer */
                /*
                                    source={{ uri: 'https://gslb.miaopai.com/stream/HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__.mp4?ssig=bbabfd7684cae53660dc2d4c2103984e&time_stamp=1533631567740&cookie_id=&vend=1&os=3&partner=1&platform=2&cookie_id=&refer=miaopai&scid=HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__', type: 'mpd' }}
                */
                source={require('../images/home.mp4')}
                style={{marginTop: 0, width: '100%', height: '100%'}}
                rate={this.state.rate}
                paused={this.state.paused}
                volume={this.state.volume}
                muted={this.state.muted}
                resizeMode={this.state.resizeMode}
                onLoad={this.onLoad}
                onProgress={this.onProgress}
                onEnd={this.onEnd}
                onAudioBecomingNoisy={this.onAudioBecomingNoisy}
                onAudioFocusChanged={this.onAudioFocusChanged}
                repeat={false}

            />
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
});