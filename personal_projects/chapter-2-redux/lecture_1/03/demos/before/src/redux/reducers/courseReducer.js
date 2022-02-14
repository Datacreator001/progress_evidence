import * as types from "../actions/actionTypes"

export default function courseReducer(state=[],action){
switch(action.type){
    case types.CREATE_COURSE:
        // state.push(action.course); // don't do this
        return [...state, {...action.course}] // do this instead
    default:
        return state;    
}
}