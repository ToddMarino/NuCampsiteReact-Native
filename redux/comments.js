import { State } from 'react-native-gesture-handler';
import * as ActionTypes from './ActionTypes';

export const comments = { errMess: null, comments: [], action} => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload}

        case ActionTypes.COMMENTS_FAILED:
            return {...State, errMess: action.payload}

        default:
            return state
    }
}