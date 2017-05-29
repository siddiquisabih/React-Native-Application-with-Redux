import React, { Component } from "react"

import { View, Text } from "react-native"
import { StackNavigator } from "react-navigation"
import Button from "./Tags/Button"


class Second extends Component {
static navigationOptions = {
    title: 'Second',
  };

    render() {
        const {navigate} = this.props.navigation
        return (
            <View>
            {console.log(this.props)}
            <Text>this is screen Component</Text>
            <Button onPress={()=>{
                navigate('routeTwo')
            }} title="main">click</Button>
</View>
        )
    }
}
export default Second