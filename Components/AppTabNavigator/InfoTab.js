import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

import {Icon} from "native-base";

class InfoTab extends Component {
    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-information-circle" style={{ color: tintColor }} />
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>InfoTab</Text>
            </View>
        )
    }
}
export default InfoTab;


const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});