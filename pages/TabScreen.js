import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/AntDesign'
import HomeScreen from './tab/HomeScreen'
import OrderScreen from './tab/OrderScreen'
import MyScreen from './tab/MyScreen'
const RootTabs = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Ionicons
                    name={'appstore-o'}
                    size={26}
                    style={{color: tintColor}}
                />
            )


        }
    },
    profile: {
        screen: OrderScreen,
        navigationOptions: {
            tabBarLabel: '订单',
            tabBarIcon: ({tintColor}) => (
                <Ionicons
                    name={'switcher'}
                    size={26}
                    style={{color: tintColor}}
                />
            )


        }
    },
    my: {
        screen: MyScreen,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Ionicons
                    name={'adduser'}
                    size={26}
                    style={{color: tintColor}}
                />
            )


        }
    },

}, {
    tabBarOptions: {
        activeTintColor: '#00DBF5',
        style: {
            // backgroundColor:'green'

        }

    }
});
export default RootTabs;