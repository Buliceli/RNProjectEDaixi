import React, {Component} from 'react';
import {
    Platform,
    Modal,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ScrollView,
    DeviceInfo,
    SafeAreaView,
    Button
} from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign'
import Carousel from '../../components/CarouselComponent'
import Swiper from '../../components/SwiperComponent'
import SplashScreen from 'react-native-splash-screen'
import HomeVideo from '../../components/HomeVideoCompoment'
import Pop from 'rn-global-modal'
import store from '../store'
const swidth = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isJump: false,  //是否跳过视频播放 默认不跳过
        };
        store.subscribe(()=>{
            if (store.getState().isPlayEnd === 1){
                this.setState({
                    isJump:true,
                });
            }
        });
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    jumpNextPage() {
        const navigation = this.props.navigation;
        navigation.navigate('Video')
    };

    render() {
        console.disableYellowBox = true;

        if (!this.state.isJump) {
            return <Modal style={styles.modelSy}>
                <HomeVideo style={styles.videoSy}/>
                <Text style={styles.jumpSty}
                      onPress={()=>{
                          this.setState({
                              isJump:true,
                          });
                      }}
                >
                    跳过
                </Text>
            </Modal>


        }
        return <ScrollView>
            {/*轮播图区域*/}
            <SafeAreaView style={styles.flash}>
                {/*<Image style={styles.picStyle} source={require('../../images/QQ20190831-0.jpg')}/>*/}

                {/*轮播图*/}
                <View style={styles.carouselSy}>
                    <Swiper/>
                </View>

                {/*城市*/}
                <View style={styles.city}>
                    <Text style={styles.cityName}
                          onPress={() => {
                              const navigation = this.props.navigation;
                              navigation.navigate('city', '北京');
                          }}
                    >北京</Text>
                    <Ionicons
                        name={'caretdown'}
                        size={14}
                    />
                </View>

            </SafeAreaView>
            <Text style={styles.clean}>-专业清洗-</Text>
            {/*横排的四个分类*/}
            <View style={styles.cleanList}>
                <View style={[styles.item, styles.cleanOne]}>
                    <Text style={styles.itemText}>洗衣</Text>
                    <Image style={styles.itemPic}
                           source={require('../../images/2_374_110827_533_533.jpg')}/>
                    <Text style={{position: 'absolute', width: '100%', height: '100%'}}
                          onPress={() => {
                              this.jumpNextPage();
                          }}
                    >

                    </Text>
                </View>
                <View style={[styles.item, styles.cleanTwo]}>
                    <Text style={styles.itemText}>洗鞋</Text>
                    <Image style={styles.itemPic} source={require('../../images/10894538_214957481000_2.jpg')}/>
                    <Text style={{position: 'absolute', width: '100%', height: '100%'}}
                          onPress={() => {
                              this.jumpNextPage();
                          }}
                    >

                    </Text>
                </View>
                <View style={[styles.item, styles.cleanThr]}>
                    <Text style={styles.itemText}>洗家纺</Text>
                    <Image style={styles.itemPic} source={require('../../images/th.jpeg')}/>
                    <Text style={{position: 'absolute', width: '100%', height: '100%'}}
                          onPress={() => {
                              this.jumpNextPage();
                          }}
                    >

                    </Text>
                </View>
                <View style={[styles.item, styles.cleanFour]}>
                    <Text style={styles.itemText}>窗帘清洗</Text>
                    <Image style={styles.itemPic} source={require('../../images/th-2.jpeg')}/>
                    <Text style={{position: 'absolute', width: '100%', height: '100%'}}
                          onPress={() => {
                              this.jumpNextPage();
                          }}
                    >

                    </Text>
                </View>
            </View>
            {/*高端洗护*/}
            <View style={styles.heightStyle}>
                <Text style={{
                    textAlign: 'center',
                    color: 'rgba(0,0,0,0.2)',
                    fontSize: 11,
                    height: 20,
                    //backgroundColor: 'red',
                    lineHeight: 20
                }}>-高端洗护-</Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <View style={styles.left}>
                        <View style={styles.textStyle}>
                            <Text numberOfLines={2}
                                  ellipsizeMode='tail'
                                  style={{
                                      textAlign: 'center',
                                      fontSize: 14
                                  }}
                                //style={{backgroundColor:'blue'}}
                            >
                                奢侈品养护
                            </Text>
                        </View>

                        <Image style={styles.imageSt} source={require('../../images/th-3.jpeg')}/>
                    </View>
                    <View style={styles.right}>
                        <View style={styles.textStyle}>
                            <Text numberOfLines={2}
                                  ellipsizeMode='tail'
                                  style={{
                                      textAlign: 'center',
                                      fontSize: 14
                                  }}
                            >
                                高端成衣家纺
                            </Text>
                        </View>
                        <Image style={styles.imageSt}
                               source={require('../../images/O1CN01DaoXdA1uvqV6LEKeP_!!86736100.jpg_300x300.jpg')}/>
                    </View>
                </View>
            </View>
            {/*5个小图标*/}
            <View style={styles.icons}>
                <View style={styles.iconItem}>
                    <View style={styles.icon}>
                        <Ionicons
                            name={'slack'}
                            size={26}
                        />
                    </View>
                    <Text style={{fontSize: 11}}>服务介绍</Text>
                </View>
                <View style={styles.iconItem}>
                    <View style={styles.icon}>
                        <Ionicons
                            name={'earth'}
                            size={26}
                        />
                    </View>
                    <Text style={{fontSize: 11}}>服务范围</Text>

                </View>
                <View style={styles.iconItem}>
                    <View style={styles.icon}>
                        <Ionicons
                            name={'pay-circle-o1'}
                            size={26}
                        />
                    </View>
                    <Text style={{fontSize: 11}}>价目中心</Text>

                </View>
                <View style={styles.iconItem}>
                    <View style={styles.icon}>
                        <Ionicons
                            name={'deleteusergroup'}
                            size={26}
                        />
                    </View>
                    <Text style={{fontSize: 11}}>团体洗衣</Text>

                </View>
            </View>
            {/*评价*/}
            <View style={styles.bottomSy}>
                <Image style={{height: '100%', width: '100%'}} source={require('../../images/44444.jpg')}/>
                {/*录播图*/}
                <View style={styles.sweipe}>
                    <Carousel/>
                </View>
                <Text style={{position: 'absolute', marginTop: 10 + 170, fontSize: 12, color: 'white'}}>
                    [更多评价]
                </Text>
            </View>
        </ScrollView>
    }
}


//671 447
const styles = StyleSheet.create({

        modelSy: {
            position: 'relative'
        },
        jumpSty: {
            //backgroundColor: 'green',
            color: 'white',
            width: 100,
            height: 40,
            lineHeight: 40,
            textAlign: 'center',
            fontSize: 17,
            fontWeight: '600',
            position:'absolute',
            right:10,
            bottom:10

        },
        videoSy: {
            width:'100%',
            height:'100%',
            backgroundColor: 'red',
            position: 'absolute'
        },
        flash: {
            width: swidth,
            height: 200,
            position: 'relative'
        },
        carouselSy: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: swidth,
            height: 200,
            marginTop: 0

        },
        picStyle: {
            width: swidth,
            height: swidth * 447 / 671,
        },
        city: {
            position: 'absolute',
            backgroundColor: 'rgba(255,255,255,0.6)',

            width: '20%',
            height: 25,
            left: '40%',
            top: DeviceInfo.isIPhoneX_deprecated ? 30 : 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 13,
            flexDirection: 'row'


        },
        cityName: {
            marginRight: 5
        },
        clean: {
            textAlign: 'center',
            fontSize: 11,
            color: 'rgba(0,0,0,0.2)',
            marginTop: 15
        },
        cleanList: {
            flexDirection: 'row',
            borderBottomColor: '#F3F7FA',

            borderBottomWidth: 5
        },
        item: {
            flex: 1,
            height: swidth * 0.25 * 1.2 + 10,
            alignItems: 'center',
            marginTop: 15,
            borderWidth: 0.6,
            borderBottomColor: 'white',
            borderLeftColor: 'white',
            borderColor: 'rgb(229,228,225)',
            paddingBottom: 10,


        },
        itemPic: {
            width: '80%',
            height: swidth * 0.25 * 1.2 - 26
        },
        itemText: {
            height: 25,
            lineHeight: 25

        },
        cleanOne: {
            backgroundColor: 'rgb(249,252,255)',
            position: 'relative'

        },
        cleanTwo: {
            backgroundColor: '#FFFCFC',
            position: 'relative'

        },
        cleanThr: {
            backgroundColor: '#FDFBFF',
            position: 'relative'

        },
        cleanFour: {
            backgroundColor: '#FAFFFF',
            position: 'relative'

        },
        heightStyle: {
            marginTop: 5,
            borderBottomColor: '#F3F7FA',
            borderBottomWidth: 10
        },
        left: {
            flex: 1,
            flexDirection: 'row',
            height: 100,
            borderColor: 'rgb(229,228,225)',
            borderWidth: 0.6,
            borderLeftWidth: 0,
            alignItems: 'center',
            borderBottomWidth: 0

        },
        right: {
            flex: 1
            ,
            flexDirection: 'row',
            borderColor: 'rgb(229,228,225)',
            borderWidth: 0.6,
            borderLeftWidth: 0,
            alignItems: 'center',
            borderBottomWidth: 0


        },
        imageSt: {
            width: '60%',
            height: '80%',
        },
        textStyle: {
            width: '30%',
            height: 100,
            justifyContent: 'center',

        },
        icons: {
            flexDirection: 'row',
            paddingBottom: 5,
            paddingTop: 5
        },
        icon: {
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.4)',
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8
        },
        iconItem: {
            flex: 1,

            alignItems: 'center',
            height: 70,
            justifyContent: 'space-around'
        },
        bottomSy: {
            borderTopColor: '#F3F7FA',
            borderBottomColor: '#F3F7FA',
            borderBottomWidth: 5,
            borderTopWidth: 5,
            height: 230, width: swidth,
            position: 'relative',
            alignItems: 'center'

        },
        sweipe: {
            position: 'absolute',
            width: swidth,
            height: 190 - 45,
            marginTop: 25
        }
    })
;
export default HomeScreen;