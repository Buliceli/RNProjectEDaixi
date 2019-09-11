import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, Image, ScrollView,TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign'
import store from '../../pages/store'


class MyScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'登录'
        };
        store.subscribe(()=>{
            if (store.getState().isLogin === 1){
                alert('跨组件传值类似于iOS中的通知 必须先创建通知中心 再发送通知 MyScreen页面接收到订阅');
                this.setState({
                    name:'已在订单页登录'
                }) ;
            }
        });
    }
    getImg({str}) {
        if (str === '易代付') {
            return <Image style={{width: 15, height: 15, marginLeft: 15}} source={require('../../images/daifu.png')}/>
        } else if (str === '常用地址') {
            return <Image style={{width: 15, height: 15, marginLeft: 15}} source={require('../../images/address666.jpg')}/>

        } else if (str === '推荐有奖') {
            return <Image style={{width: 15, height: 15, marginLeft: 15}} source={require('../../images/youyou.jpg')}/>

        } else if (str === '积分商城') {
            return <Image style={{width: 15, height: 15, marginLeft: 15}} source={require('../../images/jifenjifen.jpg')}/>

        } else if (str === '取送小e招募') {
            return <Image style={{width: 15, height: 15, marginLeft: 15}} source={require('../../images/000444.jpg')}/>

        }else if (str === '意见反馈') {
            return <Image style={{width: 15, height: 15, marginLeft: 15}} source={require('../../images/feedback666.jpg')}/>

        }else if (str === '更多') {
            return <Image style={{width: 15, height: 15, marginLeft: 15}} source={require('../../images/more666.jpg')}/>

        } else {
            return <Image style={{width: 15, height: 15, marginLeft: 15}} source={require('../../images/888111.jpg')}/>

        }
    }
    getSpec(string) {
        if (string === '取送小e招募') {

        }else if(string === '更多'){

        }
        else {
            return <View style={styles.spec}>

            </View>
        }
    }
    _renderCell(str) {
        return <View>
            <View style={styles.cell}>
                <View style={{flexDirection: 'row'}}>
                    {this.getImg({str})}
                    <Text style={{marginLeft: 16}}>{str}</Text>
                </View>
                <View style={{marginRight: 13}}>
                    <Ionicons
                        name={'right'}
                        size={15}
                        style={{color: 'gray'}}
                    />
                </View>
            </View>
            {this.getSpec(str)}
        </View>
    };

    render() {
        return <ScrollView>
            {/*顶部*/}
            <View style={styles.top}>
                <Image style={styles.bgimg} source={require('../../images/770.jpg')}/>
                <View style={styles.in}>
                    <View style={styles.left}>
                        <Image style={styles.icon} source={require('../../images/loglog.jpg')}/>
                        <View style={styles.leftIn}>
                            <Text style={{fontSize: 17}}>{this.state.name}</Text>
                            <Text style={{fontSize: 12, marginTop: 5}}>让生活多份自在</Text>
                        </View>
                    </View>
                    <View style={styles.right}>
                        <Text style={{
                            marginRight: 10,
                            color: 'red'

                        }}>充值</Text>
                    </View>
                </View>
            </View>
            {/*我的钱包 开发票*/}
            <View style={styles.wate}>
                <View style={styles.wateLeft}>
                    <Image style={{width: 15, height: 15}} source={require('../../images/kaka.jpg')}/>
                    <Text style={{marginLeft: 15, fontSize: 13, color: 'gray'}}>我的钱包</Text>
                </View>
                <Text style={styles.wateRight}>开发票</Text>
            </View>
            {/*优惠券*/}
            <View style={styles.juan}>
                <View style={styles.one}>
                    <Text>0张</Text>
                    <Text style={styles.bottomjuan}>优惠券</Text>
                </View>
                <View style={styles.two}>
                    <Text>¥0.00</Text>
                    <Text style={styles.bottomjuan}>余额</Text>
                </View>
                <View style={styles.three}>
                    <Text>0张</Text>
                    <Text style={styles.bottomjuan}>e卡</Text>
                </View>
                <View style={styles.four}>
                    <Text>0</Text>
                    <Text style={styles.bottomjuan}>积分</Text>
                </View>
            </View>
            {/*table1*/}
            <View>
                {this._renderCell('易代付')}
                {this._renderCell('常用地址')}
                {this._renderCell('推荐有奖')}
                {this._renderCell('积分商城')}
                {this._renderCell('取送小e招募')}
                <View style={{height: 10, backgroundColor: '#F3F7FA',borderTopWidth:0.2,borderTopColor:'rgba(0,0,0,0.2)'}}>
                </View>
                {this._renderCell('意见反馈')}
                {this._renderCell('更多')}
                <View style={{height: 10, backgroundColor: '#F3F7FA',borderTopWidth:0.2,borderTopColor:'rgba(0,0,0,0.2)'}}>
                </View>
                <TouchableHighlight
                    underlayColor={'rgba(255,255,255,0)'}
                    onPress={()=>{
                        //alert('666');
                        {/*跳转视频页面*/}
                        const navigation = this.props.navigation;
                        navigation.navigate('Video');
                    }}


                >
                <View style={{height:40,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:15,height:15}} source={require('../../images/callcall.jpg')}/>
                    <Text style={{fontSize:13,marginLeft:3}}>拨打客服电话</Text>
                </View>
                </TouchableHighlight>
                <View style={{height: 10, backgroundColor: '#F3F7FA',borderTopWidth:0.2,borderTopColor:'rgba(0,0,0,0.2)'}}>
                </View>
            </View>
        </ScrollView>
    }
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: width / 2.2,
        position: 'relative'
    },
    bgimg: {
        width: '100%',
        height: '100%',
        opacity: 0.5
    },
    in: {
        width: '100%',
        height: '100%',
        //backgroundColor: 'red',
        position: 'absolute',
        left: 0,
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    left: {
        width: '45%',
        height: width / 3 / 2,
        //backgroundColor: 'blue',
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    leftIn: {
        //flexDirection:'row'
        //backgroundColor:'yellow',
    },
    right: {
        width: '30%',
        height: width / 3 / 3,
        //backgroundColor: 'yellow',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        width: 55,
        height: 55
    },
    wate: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 35,
        borderBottomWidth: 0.2,
        borderBottomColor: 'rgba(0,0,0,0.2)'

    },
    wateLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25
    },
    wateRight: {
        marginRight: 25,
        color: 'rgba(0,0,255,0.5)'
    },
    juan: {
        width: width,
        flexDirection: 'row',
        height: 60,
        //backgroundColor: 'gray',
        borderBottomColor: '#F3F7FA',
        borderBottomWidth: 10

    },
    one: {
        //backgroundColor:'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    two: {
        //backgroundColor:'blue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    three: {
        //backgroundColor:'green',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    four: {
        //backgroundColor:'orange',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomjuan: {
        marginTop: 5,
        fontSize: 12,
        color: 'gray'
    },
    cell: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    spec: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        height: 0.5,
        marginLeft: 45
    },


});
export default MyScreen;