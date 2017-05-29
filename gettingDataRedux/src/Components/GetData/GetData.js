import React, { Component } from "react"
import { Text, View } from "react-native"
import * as firebase from "firebase"
import Button from "../../Tags/Button"
import Header from "../../Tags/Header"
import Input from "../../Tags/Input"
import Midware from "../../Store/Middleware/Midware"
import { connect } from "react-redux"

function mapStateToProps(state) {
    return {
        ArrayData: state.Data
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getDataFromFirebase: () => {
            dispatch(Midware.getData())
        }

    }
}
class GetData extends Component {

    getdata() {
        this.props.getDataFromFirebase()
    }

    render() {
        return (
            <View>
                <Header text="Get Data" />

                {this.props.ArrayData.map((m, v) => {
                    return (
                        <View key={v}>
                            <Text></Text>
                            <Text></Text>
                            <Text>Name : {m.name}</Text>
                            <Text>Email : {m.email}</Text>
                            <Text></Text>
                            <Text></Text>

                        </View>
                    )
                })}


                <Button onPress={this.getdata.bind(this)}>Send</Button>


            </View>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GetData)