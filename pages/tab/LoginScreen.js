import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, TextInput} from 'react-native';
import Nav from '../../components/NavCpmponent'
import store from '../../pages/store'
import AsyncStorage from '@react-native-community/async-storage';
import {loginSuccessEvent} from '../../pages/action'
export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnTitle: '获取验证码'
        }
    }

    /*订阅store*/
    componentDidMount() {
        store.subscribe(() => {
            const navigation = this.props.navigation;
            navigation.popToTop();
        })
    }

    /*定时器事件*/
    timerEvent() {
        setTimeout(() => console.warn('999'), 1000)
    }


    _renderBtn(str) {
        if (str === '请输入手机号码') {
            return <Text style={{
                borderRadius: 3,
                borderWidth: 0.5,
                color: 'rgba(0,255,255,0.4)',
                borderColor: 'rgba(0,255,255,0.4)',
                fontSize: 10,
                fontWeight: '100',
                width: 80,
                height: 25,
                textAlign: 'center',
                lineHeight: 25
            }}
                         onPress={() => {
                             this.timerEvent()

                         }}
            >
                {this.state.btnTitle}
            </Text>
        }
    }

    _renderUserInfo(str) {
        return <View style={styles.inputSy}>
            <View style={styles.putcontainer}>
                <Image
                    source={str === '请输入手机号码' ? require('../../images/username111.jpg') : require('../../images/passord111.jpg')}
                    style={styles.iconSy}/>
                <TextInput placeholder={str} style={styles.putSty}/>
                <View style={styles.rightSy}>
                    {this._renderBtn(str)}
                </View>
            </View>
            <View style={{marginTop: 0.4, height: 0.3, backgroundColor: 'rgba(0,0,0,0.2)'}}></View>
        </View>
    }

    render() {
        const navigation = this.props.navigation;
        return <View style={styles.container}>
            <Nav title='登录' leftTitle="<"/>
            <Image style={{flex: 1}} source={require('../../images/bjjj1111.jpg')}/>
            {/*用户名密码输入框*/}
            <View style={styles.top}>
                {this._renderUserInfo('请输入手机号码')}
                {this._renderUserInfo('请输入验证码')}
            </View>

            {/*登录按钮*/}
            <Text style={styles.login}
                  onPress={() => {
                      //全局存储一个标记用户已经登录的标记
                      storeData = async () => {
                          try {
                              await AsyncStorage.setItem('isLogin', 'yes')
                              navigation.popToTop();
                              //发送登录成功的消息
                              store.dispatch(loginSuccessEvent())
                          } catch (e) {
                              alert('存储报错' + e)
                          }
                      };
                      storeData();

                  }}
            >
                登录
            </Text>
            {/*用户协议*/}
            <View style={styles.protocol}>
                <Image style={{width: 12, height: 12, marginRight: 10}} source={require('../../images/34567111.jpg')}/>
                <Text style={{fontSize: 12, fontWeight: '100'}}>
                    我已阅读并同意e袋洗的
                </Text>
                <Text style={{
                    fontSize: 12,
                    fontWeight: '100',
                    color: 'rgb(83,259,250)',
                    textDecorationLine: 'underline',
                    marginTop: 1
                }}>
                    用户协议
                </Text>
            </View>
        </View>

    }
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    login: {
        position: 'absolute',
        width: width - 30,
        marginLeft: 15,
        marginTop: 300,
        textAlign: 'center',
        lineHeight: 45,
        height: 45,
        backgroundColor: 'rgb(83,259,250)',
        color: 'white'
    },
    top: {
        position: 'absolute',
        width: width,
        height: 100,
        left: 0,
        top: 120,
    },
    protocol: {
        position: 'absolute',
        marginTop: 360,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: width
    },
    inputSy: {
        backgroundColor: 'white',
        width: width,
        height: 44,

    },
    putcontainer: {
        flexDirection: 'row'

    },
    iconSy: {
        flex: 1,
        height: 40,
        resizeMode: 'center'

    },
    putSty: {
        flex: 4
    },
    rightSy: {
        flex: 2,
        justifyContent: 'center',


    }


});