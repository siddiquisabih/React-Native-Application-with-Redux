import React, { Component } from "react"

import { View, Text } from "react-native"
import { StackNavigator } from "react-navigation"



class Main extends Component {
static navigationOptions = {
    title: 'Main',
  };

    render() {
        return (
            <Text>this is Main screen Component</Text>
        )
    }
}
export default Main