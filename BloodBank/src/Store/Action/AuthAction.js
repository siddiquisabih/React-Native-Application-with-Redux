class Actions {

    static login = "Login"
    static signup = "Signup"
    static sendData = "send data"
        static getData = "get data"



    static LoginAction() {
        return {
            type: Actions.login
        }
    }

    static SignupAction() {
        return {
            type: Actions.signup
        }
    }
static dataAction() {
        return {
            type: Actions.sendData
        }
    }

     static getDataAction(value ) {
        return {
            type: Actions.getData,
            data : value
        }
    }


}
export default Actions