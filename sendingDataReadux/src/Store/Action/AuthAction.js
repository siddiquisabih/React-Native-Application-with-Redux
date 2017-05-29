class Actions {

    static sendData = "send data"


    static dataAction() {
        return {
            type: Actions.sendData
        }
    }
}
export default Actions