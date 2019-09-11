import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, DeviceInfo,FlatList} from 'react-native';
import Nav from '../../components/NavCpmponent'
import AsyncStorage from '@react-native-community/async-storage';
import store from '../../pages/store'
/*造点假数据吧...*/

const array = [

    {
        'no':'123456789',
        'time':'2019年3月7日17:55'
    },
    {
        'no':'123456789',
        'time':'2019年1月27日11:19'
    },
    {
        'no':'123456789',
        'time':'2019年9月7日7:24'
    },
    {
        'no':'123456789',
        'time':'2019年10月7日9:05'
    }
];
class OrderScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLog: 0,
            dataArray:array
        }

        store.subscribe(()=>{
            //判断接收到的是登录成功的通知才改状态
            if (store.getState().isLogin === 1){

                let state = {...this.state};
                state.isLog = 1;
                this.setState({
                    ...state
                })
            }

        });

    }
    componentWillMount() {
        getData = async () => {
            try {
                const value = await AsyncStorage.getItem('isLogin')
                if (value === 'yes') {
                    {
                        let state = {...this.state};
                        state.isLog = 1;
                        this.setState({
                            ...state
                        })
                    }
                } else {
                    {
                        let state = {...this.state};
                        state.isLog = 0;
                        this.setState({
                            ...state
                        })
                    }
                }
            } catch (e) {
            }
        };
        getData();
    }

    _renderItem(data){
        return <View style={styles.itemSy}>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                <Image style={{width:25,height:25,marginLeft:10}} source={require('../../images/1112223335561111.jpg')}/>
                <Text style={{fontSize:18,fontWeight:'400',marginLeft:10}}>洗衣</Text>
            </View>
           <Text style={{marginLeft:10,marginTop:25,fontSize:13}}>订单编号:{data.item.no}</Text>
            <View style={{flexDirection:'row',marginLeft:10,alignItems:'center'}}>
                <Text style={{fontSize:13}}>取件时间:{data.item.time}</Text>
                <Image style={{width:15,height:15,marginLeft:15}} source={require('../../images/xiuxiu111.jpg')}/>
                <Text style={{fontSize:13 , color:'rgb(0,207,241)'}}
                      onPress={()=>{
                          alert('666');
                      }}
                >修改</Text>
            </View>
        </View>
    }
    _renderLoginData() {
        return <View style={{flex:1}}>
            <Nav title='未完成' rightTitle='已完成'/>
            <FlatList
            data={this.state.dataArray}
            renderItem = {(data)=>
                this._renderItem(data)
            }
            keyExtractor={(item, index) => item + index}
            />
        </View>
    };

    _renderMainPage() {
        if (this.state.isLog === 1) {
            {
                return <View style={styles.container}>
                    {this._renderLoginData()}
                </View>
            }
        } else {
            const navigation = this.props.navigation;
            return <View>
                <Nav title='未完成' rightTitle='已完成'/>
                <Image style={styles.imgSy} source={require('../../images/1111.jpg')}/>
                <Text style={styles.textSy} onPress={() => {
                    navigation.navigate('Login')
                }}>
                    登录
                </Text>
            </View>
        }


    };

    render() {
        return <View style={styles.container}>
            {this._renderMainPage()}
        </View>
    }
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    imgSy: {
        width: 150,
        height: 150,
        left: (width - 150) * 0.5,
        marginTop: DeviceInfo.isIPhoneX_deprecated? (width - 150) : 100,
    },
    textSy: {
        width: 85,
        height: 32,
        borderColor: 'rgb(27,212,242)',
        borderWidth: 1,
        borderRadius: 4,
        color: 'rgb(27,212,242)',
        textAlign: 'center',
        lineHeight: 32,
        left: (width - 85) * 0.5

    },
    itemSy:{
        width:width,
        height:120,
    }
});
export default OrderScreen;