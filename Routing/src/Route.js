import React, { Component } from "react"

import { View, Text } from "react-native"
import { StackNavigator } from "react-navigation"
import Second from "./second"
import Main from "./MainScreen"

 const Route = StackNavigator({

     routeOne : {screen : Second },
     routeTwo : {screen : Main}
 })


export default Route