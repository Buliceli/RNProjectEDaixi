import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, DeviceInfo, FlatList} from 'react-native';
import Nav from '../../components/NavCpmponent'
import store from '../store'

export default class SelecteCityScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCity: '上海',
            hotCitys: ['北京', '泰安', '东平', '济南'],
            isSelectIndex: 0,

        }
        store.subscribe(() => {
            const navigation = this.props.navigation;
            navigation.pop();
        });

    }

    _renderHotItem(arr) {
        let currentIndex = arr[0];
        let index = arr[1];
        if (currentIndex === 0 && index === 100) {
            return <View style={styles.hotItem}>
                <Text>
                    {this.state.hotCitys[0]}
                </Text>
                <Image style={styles.imgStyle} source={require('../../images/city666.jpg')}/>
            </View>
        } else if (currentIndex === 1 && index === 101) {
            return <View style={[styles.hotItem, styles.hotSty]}>
                <Text>
                    {this.state.hotCitys[1]}
                </Text>
                <Image style={styles.imgStyle} source={require('../../images/city666.jpg')}/>
            </View>
        } else if (currentIndex === 2 && index === 102) {
            return <View style={[styles.hotItem, styles.hotSty]}>
                <Text>
                    {this.state.hotCitys[2]}
                </Text>
                <Image style={styles.imgStyle} source={require('../../images/city666.jpg')}/>
            </View>
        } else if (currentIndex === 3 && index === 103) {
            return <View style={[styles.hotItem, styles.hotSty]}>
                <Text>
                    {this.state.hotCitys[3]}
                </Text>
                <Image style={styles.imgStyle} source={require('../../images/city666.jpg')}/>
            </View>
        } else {
            {
                this._renderFu(index)
            }
        }
    }

    _renderZheng(currentIndex) {

    }

    _renderFu(index) {
        if (index === 100) {
            return <View style={styles.hotItem1}>
                <Text>
                    {this.state.hotCitys[0]}
                </Text>
            </View>

        } else if (index === 101) {
            return <View style={[styles.hotItem1, styles.hotSty]}>
                <Text>
                    {this.state.hotCitys[1]}
                </Text>
            </View>
        } else if (index === 102) {
            return <View style={[styles.hotItem1, styles.hotSty]}>
                <Text>
                    {this.state.hotCitys[2]}
                </Text>
            </View>
        } else if (index === 103) {
            return <View style={[styles.hotItem1, styles.hotSty]}>
                <Text>
                    {this.state.hotCitys[3]}
                </Text>
            </View>
        }
    }

    _renderHotCity() {
        //判断热门城市的索引在热门城市数组中的索引值
        const cityName = this.props.navigation.state.params;
        let currentIndex = -1;
        this.state.hotCitys.forEach((item, i) => {
            console.log(item + i);
            if (item === cityName) {
                currentIndex = i;
            }
        });
        console.log('最终的index =' + currentIndex);
        return <View
            style={{flex: 1, marginLeft: 20, flexDirection: 'row', alignItems: 'center'}}>
            {this._renderHotItem([currentIndex, 100])}
            {this._renderHotItem([currentIndex, 101])}
            {this._renderHotItem([currentIndex, 102])}
            {this._renderHotItem([currentIndex, 103])}
        </View>
    };

    render() {
        return <View style={styles.container}>
            <Nav title={'当前城市-' + this.state.currentCity} leftTitle='<'/>
            {/*当前定位城市*/}
            <View style={styles.localCity}>
                <Text style={{
                    height: 30,
                    backgroundColor: 'rgb(245,245,245)',
                    lineHeight: 30,
                    paddingLeft: 20,
                    fontSize: 13
                }}>
                    当前定位城市
                </Text>
                <View style={{flexGrow: 1, justifyContent: 'center'}}>
                    <Text style={{
                        height: 40, borderColor: 'rgb(200,200,200)',
                        borderWidth: 0.5,
                        width: 120,
                        lineHeight: 40,
                        justifyContent: 'center',
                        borderRadius: 4,
                        marginLeft: 20,
                    }}>
                        定位失败,点击重试
                    </Text>
                </View>
            </View>
            {/*热门城市*/}
            <View style={styles.hotCity}>
                <Text style={{
                    height: 30,
                    backgroundColor: 'rgb(245,245,245)',
                    lineHeight: 30,
                    paddingLeft: 20,
                    fontSize: 13
                }}>
                    热门城市
                </Text>
                <View style={{flexGrow: 1}}>
                    {this._renderHotCity()}
                </View>
            </View>
            <View style={{flexGrow: 1, backgroundColor: 'gray'}}>
                <Text style={styles.texttt}>
                   鉴于工作繁忙 所以二级页面 以后再说吧.....
                </Text>
                <Text style={styles.texttt}>本Demo仅供学习临摹使用 不用于任何商业盈利目的,如有侵权 立即修改, 保护知识产权,人人有责</Text>
                <Text style={styles.texttt}>作者:LD  2019/9/6</Text>
            </View>
        </View>
    }
}
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    texttt:{
      fontSize:17,
      color:'red',
      fontWeight:'600',
      marginTop:20,
        marginLeft:15,
        marginRight:15,


    },
    imgStyle: {
        width: 15, height: 15, marginLeft: 5
    },
    hotItem: {
        width: 80, height: 40, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'rgb(180,180,180)'
    },
    hotSty: {
        marginLeft: 5
    },
    hotItem1: {
        width: 80,
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'rgb(180,180,180)',
        lineHeight: 45,
    },

    container: {
        backgroundColor: 'gray',
        flex: 1,
    },
    localCity: {
        backgroundColor: 'white',
        width: width,
        height: 100,
    },
    hotCity: {
        backgroundColor: 'white',
        width: width,
        height: 100,
    }

});