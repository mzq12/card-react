import {
    createStore
} from 'redux'


const userState = 0
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const reducers = (state = userState, action) => {
    switch (action.type) {
        case LOGIN:
            if (state === 0) {
                state += 1
            }
            return state
        case LOGOUT:
            return state -= 1
        default:
            return 0
    }

}

export default createStore(reducers)