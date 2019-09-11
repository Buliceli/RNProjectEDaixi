import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    WebView,
    ActivityIndicator
} from 'react-native'

export default class LDWebViewComponent extends Component{
    render(){
        console.disableYellowBox = true;
        const URL = this.props.navigation.state.params.url;
        return <WebView
            source={{uri: URL}}
            style={{marginTop: 0}}
            startInLoadingState={true}
            renderLoading = {()=>{
                return <ActivityIndicator/>
            }
            }


        />
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        width:100,
        height:250,
    }
});