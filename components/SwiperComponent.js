import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View,Image,Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'

export default class SwiperComponent extends Component{
    render(){
        return(
            <Swiper style={styles.wrapper} showsButtons={false} autoplay = {true} autoplayTimeout = {1.5}>
                <View style={styles.slide1}>
                    <Image style={styles.text} source={require('../images/LuxuryLeft111.jpg')}/>
                </View>
                <View style={styles.slide2}>
                    {/*<Text style={styles.text}>Beautiful</Text>*/}
                    <Image style={styles.text} source={require('../images/LuxuryRight111.jpg')}/>
                </View>
                <View style={styles.slide3}>
                    <Image style={styles.text} source={require('../images/LuxuryLeft111.jpg')}/>
                </View>
            </Swiper>
        );
    }
}
let {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        // color: '#fff',
        // fontSize: 30,
        // fontWeight: 'bold'
        width:width,
        height:200,
    }
})
