import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    DeviceInfo
} from 'react-native';
import Nav from '../../components/NavCpmponent'
import Video from 'react-native-video';
import Store from '../store'

export default class LDVideoComponent extends Component {
    constructor(props) {
        super(props);
        Store.subscribe(() => {
            const navigation = this.props.navigation;
            navigation.pop();
        });
        this.state = {
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0.0,
            currentTime: 0.0,
            paused: false,
        }
    }

    render() {
        return <View style={styles.container}>
            <Nav title='作者' leftTitle='<'/>
            {/*视频播放组件*/}
            <TouchableOpacity
                style={styles.fullScreen}
                onPress={() => this.setState({paused: !this.state.paused})}
            >
                <Video
                    ref={(ref: Video) => {
                        this.video = ref
                    }}
                    /* For ExoPlayer */
                    /*
                                        source={{ uri: 'https://gslb.miaopai.com/stream/HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__.mp4?ssig=bbabfd7684cae53660dc2d4c2103984e&time_stamp=1533631567740&cookie_id=&vend=1&os=3&partner=1&platform=2&cookie_id=&refer=miaopai&scid=HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__', type: 'mpd' }}
                    */
                    source={require('../../images/vvv.mp4')}
                    style={{marginTop: 0, flex: 1}}
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
            </TouchableOpacity>
            <View style={styles.bottomStyle}>
                <View style={styles.textsy}>
                    <Text style={styles.textcontainer}>谁能不顾自己的家园</Text>
                    <Text style={styles.textcontainer}>抛开记忆中的童年</Text>
                    <Text style={styles.textcontainer}>谁能忍心看那昨日的忧愁</Text>
                    <Text style={styles.textcontainer}>带走我们的笑容</Text>
                    <Text style={styles.ld}>
                        作者LD 一个iOS开发的小学生...
                    </Text>
                </View>
            </View>

        </View>
    }
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    ld: {
        //backgroundColor: 'red',
        fontSize:17,
        alignSelf:'flex-end',
        //flexGrow:1
        marginTop:100

    },
    textcontainer: {
        fontSize: 17,
        textAlign: 'center'
    },
    textsy: {
        width: 250,
        height: '100%',
        //backgroundColor: 'green',
        alignSelf: 'flex-end',
        marginTop: 50,
        fontSize: 17,


    },
    bottomStyle: {
        width: width,
        backgroundColor: 'rgba(0,0,0,0.05)',
        marginTop: (width * 9 / 16),
        height: height - (DeviceInfo.isIPhoneX_deprecated ? 86 : 64) - (width * 9 / 16)
    },
    container: {
        flex: 1,
        //backgroundColor: 'red'
    },
    fullScreen: {
        position: 'absolute',
        top: DeviceInfo.isIPhoneX_deprecated ? 86 : 64,
        left: 0,
        // bottom: 0,
        // right: 0,
        width: width,
        height: width * 9 / 16,
        backgroundColor: 'black',
        marginTop: 0,

    },
    controls: {
        backgroundColor: 'transparent',
        borderRadius: 5,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
    progress: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden',
    },
    innerProgressCompleted: {
        height: 20,
        backgroundColor: '#cccccc',
    },
    innerProgressRemaining: {
        height: 20,
        backgroundColor: '#2C2C2C',
    },
    generalControls: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 4,
        overflow: 'hidden',
        paddingBottom: 10,
    },
    rateControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    volumeControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resizeModeControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    controlOption: {
        alignSelf: 'center',
        fontSize: 11,
        color: 'white',
        paddingLeft: 2,
        paddingRight: 2,
        lineHeight: 12,
    },
});