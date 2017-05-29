import * as firebase from "firebase"
import Actions from "../Action/AuthAction"
class Midware {

    static dataSend(userDetail) {
        return (dispatch) => {

            let database = firebase.database().ref().child("dataReadux")
            let data = {
                userData: userDetail
            }
            database.push(data)
            dispatch(Actions.dataAction())
        }
    }
}
export default Midware