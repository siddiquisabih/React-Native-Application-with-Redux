import { StackNavigator } from "react-navigation"


import Login from "../Components/Login/Login"
import Signup from "../Components/Signup/Signup"
import App from "../Components/App"
import Home from "../Components/HomePage/Home"
import Data from "../Components/DonorForm/Form"
import GetData from "../Components/DonorList/List"

const Routes = StackNavigator({
    // Main : {screen : App},
    HomeComponent: { screen: Home },
    SignupRoute: { screen: Signup },
    LoginRoute: { screen: Login },
    DonorRoute: { screen: Data },
    ListRoute: { screen: GetData }


})

export default Routes