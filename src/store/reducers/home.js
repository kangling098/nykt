import * as types from '../action-types';
let initState = {
    category: 'all'
}
export default function(state = initState,action){
    switch(action.type){
        case types.CHANGE_CATEGORY: 
            return {...state,category:action.payload};
        default:
            return state;
    }
}