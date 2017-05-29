class Actions {

    static getData = "get data"


    static getDataAction(value ) {
        return {
            type: Actions.getData,
            data : value
        }
    }
}
export default Actions