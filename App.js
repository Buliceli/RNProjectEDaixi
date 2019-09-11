/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import TabScreen from './pages/TabScreen'
import PageScreen from './pages/PageScreen'
import LoginScreen from './pages/tab/LoginScreen'
import LDVideo from './pages/tab/LDVideoComponent'
import SelectedCity from './pages/tab/SelecteCityScreen'
import WebViewC from './components/LDWebViewComponent'


const rootNavigator = createStackNavigator({

    Tab: {
        screen: TabScreen,
        navigationOptions: {
            header: null
        }
    },

    Page: {
        screen: PageScreen,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            //headerTitle: '登录'
            header: null
        }
    },
    Video:{
        screen:LDVideo,
        navigationOptions:{
            header:null
        }
    },
    city:{
        screen:SelectedCity,
        navigationOptions:{
            header:null,
        }
    },
    web:{
        screen:WebViewC,
        navigationOptions:{
            headerTitle:'专业清洗'
        }
    }

});

export default rootNavigator;