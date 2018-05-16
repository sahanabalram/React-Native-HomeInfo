import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import HomeTab from './AppTabNavigator/HomeTab'
import WeatherTab from './AppTabNavigator/WeatherTab'
import InfoTab from './AppTabNavigator/InfoTab'

import { TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'

class MainScreen extends Component {
    static navigationOptions = {
        headerLeft: <Icon name="ios-home" style={{ paddingLeft: 10 }} />,
        title: "Home Info",
        headerRight: <Icon style={{ paddingRight: 10 }} name="ios-send-outline" />
    }
    render() {
        return (
            <AppTabNavigator />
        );
    }
}
export default MainScreen;

const AppTabNavigator = TabNavigator({

    HomeTab: {
        screen: HomeTab
    },
    WeatherTab: {
        screen: WeatherTab

    },
    InfoTab: {
        screen: InfoTab
    }
 }, {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: 'white'
                    }
                })
            },
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            showLabel: false,
            showIcon: true
        
        }

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});