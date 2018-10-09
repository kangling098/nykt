import * as types from '../action-types';

export default {
    changeCategory(payload){
        return {type: types.CHANGE_CATEGORY ,payload}
    }
}