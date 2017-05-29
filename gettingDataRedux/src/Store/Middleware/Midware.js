import * as firebase from "firebase"
import Actions from "../Action/AuthAction"
class Midware {


    static getData() {
        return (dispatch) => {
            let arrdata = [];
            let database = firebase.database().ref("dataReadux")

            database.on("value", (object) => {

                let keys = object.val();
                for (var a in keys) {
                    arrdata.push(keys[a].userData)
                }
                dispatch(Actions.getDataAction(arrdata))
            })

        }
    }



}
export default Midware