import Actions from "../Action/AuthAction"

const initial_state = {

    login: "false",
    signup: "false",
    isRigister: "false",
    DataSend: "false",
    GetData: "false",
    Data: []
}

function AuthReducer(state = initial_state, action) {
    switch (action.type) {
        case Actions.login:
            return Object.assign({}, state, { login: "true", isRigister: "true" })

        case Actions.signup:
            return Object.assign({}, state, { signup: "true", isRigister: "true" })

             case Actions.sendData :
            return Object.assign({}, state, { DataSend: "true" })
            
            case Actions.getData:
            return Object.assign({}, state, { GetData: "true", Data: action.data })

        default:
            return state
    }
}
export default AuthReducer