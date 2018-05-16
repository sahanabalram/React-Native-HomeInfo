import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

import {Icon} from "native-base";

class HomeTab extends Component {
    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-heart" style={{ color: tintColor }} />
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>HomeTab</Text>
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