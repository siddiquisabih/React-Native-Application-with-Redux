import React, { Component } from "react"
import { Text, View } from "react-native"
import * as firebase from "firebase"
import {Button ,Header , Input} from "../../Tags"
import Midware from "../../Store/Middleware/Midware"
import { connect } from "react-redux"


function mapStateToProps(state) {
    return {
        ArrayData: state.Data,
        dataState: state.GetData

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
    static navigationOptions={
        title:"Donor List"
    }

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
                            <Text>Address : {m.address}</Text>
                            <Text>Email : {m.email}</Text>
                            <Text>Number : {m.number}</Text>
                            <Text>Blood Group : {m.bloodGroup}</Text>
                            <Text></Text>
                            <Text></Text>
                        </View>
                    )
                })}

                <Button onPress={this.getdata.bind(this)}>Get</Button>

            </View>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GetData)