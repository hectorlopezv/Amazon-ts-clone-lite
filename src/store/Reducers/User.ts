import * as ActionTypes from '../Actions/ActionTypes';
import * as _ from 'lodash';

const initialState = {
    user: null,
}

export const UserReducer = (state= initialState, action: any) => {
    if(action.type === ActionTypes.ADD_USER_STORE)
    {
        return _.cloneDeep(action.payload.user)
    }
    return state;
}

