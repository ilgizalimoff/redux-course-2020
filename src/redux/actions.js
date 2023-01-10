import { DECREMENT, INCREMENT, THEME } from "./types";

export function increment(){
    return{
        type: INCREMENT
    }
}

export function decrement(){
    return{
        type: DECREMENT
    }
}

export function asyncIncrement(){
    return function(dispatch){
        setTimeout(()=>{
            dispatch(increment())
        }, 2000)
    } 
}

export function themeDis(newTheme){
    return {
        type : THEME,
        payload: newTheme
    }
}