import Actions from "../Action/AuthAction"

const initial_state = {

    GetData: "false",
    Data: []
}

function AuthReducer(state = initial_state, action) {
    switch (action.type) {
        case Actions.getData:
            return Object.assign({}, state, { GetData: "true", Data: action.data })


        default:
            return state
    }
}
export default AuthReducer