import Actions from "../Action/AuthAction"

const initial_state = {

    DataSend: "false"
}

function AuthReducer(state = initial_state, action) {
    switch (action.type) {
        case Actions.sendData :
            return Object.assign({}, state, { DataSend: "true" })


        default:
            return state
    }
}
export default AuthReducer