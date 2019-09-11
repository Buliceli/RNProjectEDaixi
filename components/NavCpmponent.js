import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, DeviceInfo, Image,TouchableHighlight} from 'react-native';
import store from '../pages/store'
import {navClickAction} from '../pages/action'
export default class NavCpmponent extends Component {

    constructor(props) {
        super(props);

    }

    _renderLeft() {
        if (this.props.leftTitle == '<') {
            return <Image style={styles.backSy} source={require('../images/fanhui.png')}/>

        } else {

        }
    }

    render() {
        return <View style={styles.container}>
            <TouchableHighlight style={styles.left}
                                underlayColor={'rgba(255,255,255,0)'}
                                onPress={()=>{
                                    if (this.props.leftTitle === '<'){
                                        store.dispatch(navClickAction())
                                    }
                                }}
            >
                <View >
                    {this._renderLeft()}
                </View>
            </TouchableHighlight>

            <Text style={styles.middle}>
                {this.props.title}
            </Text>
            <Text style={styles.right}>
                {this.props.rightTitle}
            </Text>
        </View>
    }
}
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(0,213,243)',
        width: width,
        height: DeviceInfo.isIPhoneX_deprecated ? 86 : 64,
        flexDirection: 'row'
    },
    left: {
        flex: 1,
        height: 45,
        alignSelf: 'flex-end',
    },
    middle: {
        flex: 3,
        textAlign: 'center',
        height: 45,
        marginBottom: 0,
        alignSelf: 'flex-end',
        fontSize: 17,
        fontWeight: '600',
        color: 'white'
    },
    right: {
        flex: 1,
        textAlign: 'center',
        height: 45,
        alignSelf: 'flex-end',
        fontSize: 12,
        fontWeight: '600',
        color: 'white',

    },
    backSy: {
        width: 15,
        height: 15,
        marginLeft: 20

    }
});