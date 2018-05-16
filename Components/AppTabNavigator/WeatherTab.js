import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

import {Icon} from "native-base";

class WeatherTab extends Component {
    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-cloud-circle" style={{ color: tintColor }} />
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>WeatherTab</Text>
            </View>
        )
    }
}
export default WeatherTab;


const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});