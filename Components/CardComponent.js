import React, {Component} from "react";
import {StyleSheet, View, Text, Platform, Image} from "react-native";

import {Icon,Card, CardItem, Thumbnail, Body, Left, Right, Button} from "native-base";

class CardComponent extends Component{
    render(){
        return(
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require("../assets/sahana.jpg")}/>
                        <Body>
                            <Text>Today's Weather</Text>
                            <Text note>May 16, 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Thumbnail source={require("../assets/weather1.jpg")} style={{height:200, width:200,flex:1 }}/>
                </CardItem>

                <CardItem style={{height: 45}}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-outline" style={{color: "black"}}/>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{color: "black"}}/>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{color: "black"}}/>
                        </Button>
                    </Left>
                </CardItem>

                <CardItem style={{height: 20}}>
                    <Text>101</Text>
                </CardItem>

                <CardItem>
                    <Body>
                        <Text>
                        <Text style={{fontWeight:"900"}}> sahana </Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </Body>
                </CardItem>
            </Card>
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