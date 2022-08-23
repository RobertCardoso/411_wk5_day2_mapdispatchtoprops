import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CAR':
            return [ ...state, action.payload ]
        case 'REMOVE_CAR':
            const newState = [ ...state ]
            newState.splice(action.payload, 1)
            return newState
        default: 
          return state
    }
}

export default combineReducers({ user, cars })