import React, {Component} from "react";
import {StyleSheet, View, Text, Platform, Image} from "react-native";

import {Icon,Card, CardItem, Thumbnail, Body, Left, Right} from "native-base";

class CardComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Card Component</Text>
            </View>
        )
    }
}

export default CardComponent;

const styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems: "center",
            justifyContent: "center"
        }
});