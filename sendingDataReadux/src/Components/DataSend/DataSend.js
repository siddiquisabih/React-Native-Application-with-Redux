import React, { Component } from "react"
import { Text, View } from "react-native"
import * as firebase from "firebase"
import Button from "../../Tags/Button"
import Header from "../../Tags/Header"
import Input from "../../Tags/Input"
import Midware from "../../Store/Middleware/Midware"
import {connect} from "react-redux"

function mapStateToProps(state){
    return{
storeState : state
    }
}


function mapDispatchToProps(dispatch){
    return{
sendDataToFirebase :(data)=>{
dispatch(Midware.dataSend(data))
}

    }
}





class Data extends Component {
    constructor(){
        super()
        this.state={
            name : "",
            email : ""
        }
    }
    


    sendData(){
       let detail ={
           email : this.state.email,
           name : this.state.name
       }

       this.props.sendDataToFirebase(detail)




    }


    
    
    render() {
        return (
<View>
<Header text="Sending Data"/>


<Input
placeHolder="Name"
        onChangeText={name=>{this.setState({
            name
        })}}
        value = {this.state.name}
/>


<Input
placeHolder="email"
onChangeText={email=>{this.setState({
            email
        })}}
        value = {this.state.email}


        />

<Button onPress={this.sendData.bind(this)}>Send</Button>


</View>
        )
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(Data)