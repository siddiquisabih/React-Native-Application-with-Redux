import React , {Component} from "react"
import {Button } from "../../Tags"
import {View} from "react-native"

import {StackNavigator} from "react-navigation"

class Home extends Component{
static navigationOptions={
    title : 'Blood Bank'
}
    render(){

const {navigate} = this.props.navigation

        return(
            <View>



<Button onPress={()=>{
   navigate('SignupRoute')
    }} title="Signup" >Signup</Button>


<Button onPress={()=>{
   navigate('LoginRoute')
    }} title="Login" >Login</Button>


            </View>
        )
    }
}

export default Home
