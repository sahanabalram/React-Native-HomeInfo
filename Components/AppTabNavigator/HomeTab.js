import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

import {Icon} from "native-base";
import CardComponent from "../CardComponent";

class HomeTab extends Component {
    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" style={{ color: tintColor }} />
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <CardComponent/>
            </View>
        )
    }
}
export default HomeTab;


const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});