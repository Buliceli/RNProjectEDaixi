import React, {Component} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {Dimensions, StyleSheet, View, Text, Platform, Image} from 'react-native';

const {width: screenWidth} = Dimensions.get('window')
export default class CarouselComponent extends Component {

    _renderItem({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={require('../images/770.jpg')}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}

                />
                <Text style={styles.subTitle}>深圳用户 133****5268</Text>
                <Text numberOfLines={2} style={styles.middleText}>"清洗超干净 收货 送货超快 一直喜欢衣代洗 绝对会在关顾"</Text>
                <Text style={styles.bottomSyle}>洗衣家纺   </Text>
                <Text style={styles.title} numberOfLines={2}>
                    {item.title}
                </Text>
            </View>
        );
    }

    render() {
        return (
            <Carousel
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={['1', '2']}
                renderItem={this._renderItem}
                hasParallaxImages={true}
                autoplayInterval={2000}
                loop={true}
                autoplay={true}
                onLoad={()=>{


                }}

            />
        );
    }
}
const styles = StyleSheet.create({
    item: {
        width: screenWidth - 60,
        //height: screenWidth - 60,
        height: 200,
        position: 'relative'
    },
    subTitle: {
        //backgroundColor: 'green',
        fontSize: 17,
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: 40,
        lineHeight: 40,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    middleText: {
        //backgroundColor: 'green',
        width: '80%',
        position: 'absolute',
        alignSelf:'center',
        marginTop:60


    },
    bottomSyle:{
        position:'absolute',
        //backgroundColor:'green',
        alignSelf:'flex-end',
        marginTop:120,
        marginLeft:10
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        //borderRadius: 8,
    },
    image: {
        //...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',


    },
})




