import { combineReducers } from "redux"
import { DECREMENT, INCREMENT, THEME } from "./types"

function counterReducer(state = 0, action){
    if(action.type === INCREMENT){
        return state + 1
    } else if(action.type === DECREMENT){
        return state - 1
    } 
    return state
}

const initialThemeState = {
    value: 'light'
}

function themeReducer(state = initialThemeState, action){
    if(action.type === THEME){
        return {...state, value: action.payload}
    }
    return state
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})